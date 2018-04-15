var app = angular.module('chatApp', ['ngMaterial']);



app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('purple')
        .accentPalette('green');
});

app.controller('chatController', function ($scope) {
    $scope.messages = [
        {
            'sender': 'USER',
            'text': 'hello'
 		},
        {
            'sender': 'BOT',
            'text': 'how are you!!!'
 		},
        {
            'sender': 'USER',
            'text': 'I am fine'
 		}
 		];


});