<?php

namespace App\Http\Requests\Admin;

use App\Http\Requests\Request;
use Illuminate\Routing\Route;

class EditUserRequest extends Request
{
    private $route;
    public function __construct(Route $route)
    {
        $this->route=$route;
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users,email,'.$this->route->getParameter('users'),
            'roles_id'=>'required|exists:roles,id'
        ];
    }
}
