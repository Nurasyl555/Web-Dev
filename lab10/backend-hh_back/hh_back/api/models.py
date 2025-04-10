from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    city = models.CharField(max_length=100)
    address = models.TextField()

    def __str__(self):
        return self.name
    
class Vacancy(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    city = models.CharField(max_length=100)
    address = models.TextField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="vacancy")

    def __str__(self):
        return super().__str__()