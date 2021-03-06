<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use Illuminate\Mail\Message;
use Illuminate\Support\Facades\Password;

class PasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Create a new password controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }
    protected function resetPassword($user, $password)
    {
        $user->password = bcrypt($password);

        $user->save();

        \Auth::login($user);
    }
	public function postEmail(Request $request)
	{
		$this->validate($request, ['email' => 'required|email|max:255']);

		$response = Password::sendResetLink($request->only('email'), function (Message $message) {
			$message->subject($this->getEmailSubject());
		});

		switch ($response) {
			case Password::RESET_LINK_SENT:
				return redirect()->back()->with('message', trans($response))->with('loginTab', 'login');

			case Password::INVALID_USER:
				return redirect()->back()->withErrors(['email' => trans($response)])->with('loginTab', 'password');
		}
	}

}
