<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
    public $timestamps = false;
    protected $guarded = ['description'];
    public function user()
    {
        return $this->hasMany('app\User');
    }
}
