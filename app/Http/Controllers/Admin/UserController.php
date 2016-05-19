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
//        $users = User::orderBy('id')->paginate(10);
//        return view('admin.users.index',compact('users'));
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
        $user->fill($request->all());
        $user->save();
        Session::flash('message',trans('home.messages.edit_user_suceed', ['name' => $user->name]));
        return redirect()->route('admin.users.index');
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
		if ($request->ajax()) return User::orderBy('id')->paginate(20)->toJson();
		else return redirect('/');
	}
}
