<?php

namespace App\Http\Middleware;

use Closure;
use Gate;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Gate::denies('crud-users')) {
            if ($request->ajax()) {
                return response('Unauthorized.', 401);
            } else {
                abort(404);
            }
        }
        return $next($request);
    }
}
