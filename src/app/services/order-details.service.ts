import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id: 1,
      foodName: "Meat Lunch Box",
      foodDetails: "Meat Lunch Box",
      foodPrice: 15,
      foodImg: "https://cdn.cdnparenting.com/articles/2021/04/18123012/1460084525.jpg"
    },

    {
      id: 2,
      foodName: "Fish Lunch Box",
      foodDetails: "Fish Lunch Box",
      foodPrice: 15,
      foodImg: "https://cdn.cdnparenting.com/articles/2021/04/18123012/1460084525.jpg"
    },

    {
      id: 3,
      foodName: "Chicken lunch box",
      foodDetails: "Chicken lunch box",
      foodPrice: 15,
      foodImg: "https://cdn.cdnparenting.com/articles/2021/04/18123012/1460084525.jpg"
    },
    {
      id: 4,
      foodName: "Vegan lunch box",
      foodDetails: "Vegan lunch box",
      foodPrice: 15,
      foodImg: "https://cdn.cdnparenting.com/articles/2021/04/18123012/1460084525.jpg"
    },
    {
      id: 5,
      foodName: "Salad",
      foodDetails: "Salad",
      foodPrice: 15,
      foodImg: "https://cdn.cdnparenting.com/articles/2021/04/18123012/1460084525.jpg"
    },
    {
      id: 6,
      foodName: "Juices",
      foodDetails: "Juices",
      foodPrice: 15,
      foodImg: "https://cdn.cdnparenting.com/articles/2021/04/18123012/1460084525.jpg"
    }

  ]

}

