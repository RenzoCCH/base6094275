<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Validator;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;

class AuthController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Registration & Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users, as well as the
    | authentication of existing users. By default, this controller uses
    | a simple trait to add these behaviors. Why don't you explore it?
    |
    */

    use AuthenticatesAndRegistersUsers, ThrottlesLogins;

    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'getLogout']);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|confirmed|min:6',
        ]);
    }
	public function getLogin()
	{
		return view('auth.principalLogin',['loginTab' => 'login']);
	}
    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return User
     */
    protected function create(array $data)
    {
        $user = new User([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
        $user->roles_id = '2';
        $user->save();

        return $user;
    }
	///register a user
	public function postRegister(Request $request)
	{
		$validator = $this->validator($request->all());

		if ($validator->fails()) {
			$request->session()->flash('loginTab', 'register');
			$this->throwValidationException(
				$request, $validator
			);
		}

		\Auth::login($this->create($request->all()));

		return redirect($this->redirectPath());
	}
	//	--------------set the login path---------------
    public function loginPath()
    {
        return property_exists($this, 'loginPath') ? $this->loginPath : route('login');
    }
	//	to verifi if the email is unique
	public function postEmailVerification(Request $request)
	{
		if($request->ajax()) {
			if (User::where('email', '=', Input::get('email'))->exists()) {
				return 'false';
			}
			else{
				return 'true';
			}
		}
		else return response('Unauthorized.', 401);
	}

}
