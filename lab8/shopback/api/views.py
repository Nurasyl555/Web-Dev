from gc import get_objects

from django.http import JsonResponse, HttpResponse
from django.shortcuts import get_object_or_404
from django.views.generic import DetailView
from .models import Category, Product
from django.views import View



# Create your views here.
def home(request):
    return HttpResponse("Hello Muha")

class ProductListView(DetailView):
    def get_object(self, request):
        products = list(Product.objects.values("id", "name", "description", "count", "is_active", "category_name"))
        return JsonResponse(products, safe=False, json_dumps_params={"indent": 2})
    
class ProductDeteailView(View):
    def get(self, request, id):
        product = get_object_or_404(Product, id=id)
        return JsonResponse({
            "id": product.id, 
            "name": product.name,
            "description": product.description,
            "count" : product.count,
            "is_count" : product.is_count,
            "category_name": product.category_name
        }, json_dumps_params={"indent": 2})

class CategoryListView(View):
    def get(self, request):
        categories = list(Category.objects.values("id", "name"))
        return JsonResponse(categories, safe=False, json_dumps_params={"indent": 2})

class CategoryDeteailView(View):
    def get(self, request, id):
        category = get_object_or_404(Category, id=id)
        return JsonResponse({
            "id": category.id,
            "name": category.name
        }, json_dumps_params={"indent": 2})

class CategoryProductView(View):
    def get(self, request, id):
        category = get_object_or_404(Category, id=id)
        product = list(category.product.values("id", "name", "description", "count", "is_active", "category_name"))
        return JsonResponse(product, safe=False, json_dumps_params={"indent": 2})
