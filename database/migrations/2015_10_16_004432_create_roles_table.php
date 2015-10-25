<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('roles', function(Blueprint $table)
        {
            $table->increments('id');
            $table->string('description',40);
        });
        Schema::table('users', function ( $table) {
            $table->foreign('roles_id')->references('id')->on('roles');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function ( $table) {
            $table->dropForeign('users_roles_id_foreign');
        });
        Schema::drop('roles');
    }
}
