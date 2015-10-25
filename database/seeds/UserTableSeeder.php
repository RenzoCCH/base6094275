<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('roles')->insert([
            'description' => 'Administrator',
        ]);
        DB::table('roles')->insert([
            'description' => 'User',
        ]);

        factory(App\User::class)->create([
            'name'=>'Renzo',
            'email'=>'renzocallachavez@gmail.com',
            'password'=>bcrypt('123456'),
            'roles_id'=>'1',
        ]);
        factory(App\User::class,49)->create();
    }
}
