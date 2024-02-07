<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product; 

class ProductController extends Controller
{

    public function products(Request $request)
    {
        $products = new Product();
        $products->name = $request->name;
        $products->description = $request->description;
        $products->price = $request->price;
        $products->save();

        return response()->json($products, 201); 
    }

    public function getAllProducts()
    {
        $productss = Product::all();

        return response()->json($productss);
    }

 

    public function show(string $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Ürün bulunamadı'], 404); 

        return response()->json($products);
        }}

 




}
