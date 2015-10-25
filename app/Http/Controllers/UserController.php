<?php

namespace App\Http\Controllers;

use App\Http\Requests\EditPasswordRequest;
use App\Http\Requests\EditUserRequest;
use Validator;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function editUser()
    {
        return view('auth.editUser');
    }
    public function editPassword()
    {
        return view('auth.editPassword');
    }
    public function updateUser(EditUserRequest $request)
    {
        Auth::user()->fill([
            'name' => $request->all()['name'],
            'email' => $request->all()['email'],
        ]);
        \Auth::user()->save();
        $request->session()->flash('edit_success', trans('home.messages.edit_suceed'));
        return redirect('/');
    }
    public function updatePassword(EditPasswordRequest $request)
    {
        Auth::user()->fill([
            'password' => $request->all()['new_password'],
        ]);
        \Auth::user()->save();
        $request->session()->flash('edit_success', trans('home.messages.edit_suceed'));
        return redirect('/');
    }
}
