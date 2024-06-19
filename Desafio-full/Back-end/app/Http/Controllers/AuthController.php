<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only(['email', 'password', 'remember']);

        if ($credentials['email'] == 'admin@admin.com' && $credentials['password'] == '123') {
            $accessToken = 'token_gerado_pelo_backend';

            return response()->json([
                'access_token' => $accessToken,
                'token_type' => 'bearer',
                'expires_in' => 3600
            ]);
        }

        return response()->json(['error' => 'Credenciais inválidas.'], 401);
    }
}
