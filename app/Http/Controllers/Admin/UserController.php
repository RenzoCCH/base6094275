<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\Admin\EditUserRequest;
use App\Roles;
use App\User;
use Gate;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use Illuminate\Contracts\Support\Jsonable;

class UserController extends Controller
{

    public function index()
    {
        return view('admin.users.index');
    }
    public function create()
    {
        //
	}
    public function store(Request $request)
    {
        //
    }
    public function show($id)
    {
        //
    }
    public function edit($id)
    {
        $user= User::findOrFail($id);
        $roles=Roles::lists('description', 'id');
        return view('admin.users.edit',compact('user','roles'));
    }
    public function update(EditUserRequest $request, $id)
    {
		$user= User::findOrFail($id);
		Session::flash('last_user', $user['attributes']);
        $user->fill($request->all());
        $user->save();
		Session::flash('message',trans('home.messages.edit_user_suceed', ['name' => $user->name]));
		if($request->ajax())
		{
			return session('message');
		}
		else{

			return redirect()->route('admin.users.index');
		}
    }

	public function cancelUpdate(){
		$user=User::findOrFail(session('last_user')['id']);
		$user->name=session('last_user')['name'];
		$user->email=session('last_user')['email'];
		$user->roles_id=session('last_user')['roles_id'];
		$user->save();
		return session('last_user');
	}
    public function destroy($id)
    {
        $user=User::findOrFail($id);
        $user->delete();
        Session::flash('message',trans('home.messages.delete_user_suceed', ['name' => $user->name]));
        return redirect()->route('admin.users.index');
    }
	public function usersAjax(Request $request)
	{
		if ($request->ajax())
		{
			$paginator = User::orderBy('name')->Where('name', 'ilike', '%'.$request->input('name').'%' );
			if($request->has('email'))
			{	$paginator=$paginator->Where('email', 'ilike', '%'.$request->input('email').'%' );}
			if($request->has('role'))
			{	$paginator=$paginator->Where('roles_id',$request->input('role') );}
			$paginator=$paginator->paginate(20)->toJson();
			return $paginator;
		}
		else return redirect('/');
	}
}
