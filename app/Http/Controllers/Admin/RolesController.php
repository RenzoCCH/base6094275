<?php

namespace App\Http\Controllers\Admin;

use App\Roles;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;

class RolesController extends Controller
{
//	--------function to retreive the user's roles
	public function rolesAjax(Request $request)
	{
		if ($request->ajax())
		{
			return Roles::all()->toJson();
		}
		else return redirect('/');

	}
}
