<?php

namespace App\Providers;

use Illuminate\Contracts\Auth\Access\Gate as GateContract;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Request;
use Jenssegers\Agent\Agent;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any application authentication / authorization services.
     *
     * @param  \Illuminate\Contracts\Auth\Access\Gate  $gate
     * @return void
     */
    public function boot(GateContract $gate)
    {
        $this->registerPolicies($gate);

        $gate->define('crud-users',function(){
            return \Auth::user()->isAdmin();
        });
		$gate->define('auth',function(){
			return \Auth::check();
		});
		$gate->define('home',function(){
			return ((Request::path()==='/' || Request::path()=='home' || Request::path() == '')?true:false);
		});
		$gate->define('admin/users',function(){
			return !preg_match("/admin\/users$/", Request::path());
		});
		$gate->define('ismobile',function(){
			$agent = new Agent();
			return $agent->isMobile();
		});
		$gate->define('isphone',function(){
			$agent = new Agent();
			return $agent->isPhone();
		});
	}
}

