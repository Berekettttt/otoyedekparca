<?php

namespace App\Http\Controllers\Api;

use App\Models\Logins; 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $user = new Logins();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;

        $user->save();

        return response()->json(['message' => 'Kullanıcı başarıyla kaydedildi'], 201);
    }

    public function store(Request $request)
    {
        $user = new Register();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password =  Hash::make($request->password);

        $user->save();
        return response()->json(['message' => 'Yeni Kullanıcı Kaydedildi']);
    }

    public function show(string $id)
    {
        $user = Register::find($id);
        return $user;
    }


}