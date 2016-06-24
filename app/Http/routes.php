<?php
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
//use Illuminate\Support\Facades\Mail;

Route::get('/','HomeController@index');
Route::get('home','HomeController@index');

//-------------- Authentication routes...
Route::get('login', [
    'uses'=>'Auth\AuthController@getLogin',
    'as'=>'login'
]);

Route::post('login',  [
    'uses'=>'Auth\AuthController@postLogin',
    'as'=>'login'
]);

Route::get('logout', [
    'uses'=>'Auth\AuthController@getLogout',
    'as'=>'logout'
]);

// ---------Registration routes...
//Route::get('register', [
//    'uses'=>'Auth\AuthController@getRegister',
//    'as'=>'register'
//]);
Route::post('register', [
    'uses'=>'Auth\AuthController@postRegister',
    'as'=>'register'
]);
Route::post('register/emailverification', [
	'uses'=>'Auth\AuthController@postEmailVerification',
]);

///---------- this is for the user configuration
Route::get('user/edition',[
    'uses'=>'UserController@editUser',
    'as'=>'user/edition'
]);
Route::get('user/lista',[
	'uses'=>'UserController@lista',
	'as'=>'user/lista'
]);
Route::put('user/update',[
    'uses'=>'UserController@updateUser',
    'as'=>'user/update'
]);
Route::put('password/update',[
    'uses'=>'UserController@updatePassword',
    'as'=>'password/update'
]);

// Password reset link request routes...
//Route::get('password/email', 'Auth\PasswordController@getEmail');
Route::post('password/email', 'Auth\PasswordController@postEmail');

// Password reset routes...
Route::get('password/reset/{token}', 'Auth\PasswordController@getReset');
Route::post('password/reset', 'Auth\PasswordController@postReset');


//-----------this is for the list of users--------------
Route::group(['prefix' => 'admin','namespace' => 'Admin','middleware'=>array('auth','admin')], function () {
	Route::get('/users/usersAjax', ['as'=>'admin.users.usersAjax','uses'=>'UserController@usersAjax']);
	Route::get('/roles/rolesAjax', ['as'=>'admin.roles.rolesAjax','uses'=>'RolesController@rolesAjax']);
	Route::get('/users/{users}/destroy', ['as'=>'admin.users.delete','uses'=>'UserController@destroy']);
	Route::resource('users','UserController');

});

// Sending Email
//get('/email',function(){
//	Mail::send('emails.test',['name'=>'Novica'],function($message)
//	{
//		$message->to('ren_cl@hotmail.com','me')->subject('Welcome');
//	});
//});