<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Logins; 

class LoginController extends Controller
{

    public function Login(Request $request)
    {
        $user = Logins::where('email',$request->email)->first();
        $id=$user['id'];
        if(!$user){
            return response()->json(['status' => "Email yok"], 401);
        }
        return response()->json([
            'status' => $request->password == $user['password'] ? $id : "Email veya Şifre yanlış"
        ], $request->password == $user['password'] ? 200 : 401);
    }

    public function store(Request $request)
    {
        $user = new Logins(); 
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->save();
    }


  
    public function show(string $id)
    {
        $user = Logins::find($id); 
        return $user;
    }


    public function update(Request $request, string $id)
    {
        $id = (int) $id;
        $user = Logins::findOrFail($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->save();

        return response()->json(['message' =>  $id]);
    }

    public function destroy($id)
    {
        $user = Logins::destroy($id); 
        return response()->json(['message' => 'Silme işlemi başarılı']);
    }
}