const myApp = angular.module('myApp', [])

myApp.controller('myController', ($scope) => {

  /* Titulo */
  $scope.title = 'Angular.js Getting Started'

  /* Esta variable va a contener el item seleccionado por el usuario*/
  $scope.itemSelected = {}
  let abc = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,ñ,o,p,q,r,s,t,u,v,w,x,y,z'
  abc = abc.toUpperCase();
  $scope.aABC = abc.split(',')

  /* listado de items mostrados en pantalla (card) */
  $scope.array = [
    {
      title: 'title 001',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'title 002',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'title 003',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'title 004',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      title: 'title 005',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }
  ]

 

  /* 
    Esta función obtiene el item seleccionado por el usuario y lo almacena
    en la variable itemSelected para luego ser mostrado en la modal
  */
  $scope.itemSelectedHandle = (item) => {
    $scope.itemSelected = {
      image: `image/${item}.png`
    }
  }

})