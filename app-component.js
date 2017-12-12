var myapp = angular.module('myapp', []);

myapp.component('app', {
    templateUrl: 'app-component.html',
    controller: 'MyAppCtrl'        
});

myapp.controller('MyAppCtrl', function(){
    this.title = 'App Title';   
    this.todaydate = new Date().getTime();
    this.name = 'Mohan Reddy';
    this.experince = 6;
    this.age = 25;
});

myapp.filter('welcomeFilter', function(){
    return function(name) {        
        return "Welcome "+name+", Have a greate day";
    }
});
myapp.filter('greetingsFilter', function(){
    return function(name, hellotext, greetingtext) {        
        return hellotext +" " + name + " "+greetingtext;
    }
});
myapp.filter('expFilter', function(){
    return function(exp) {        
        if(exp > 10) {
            return "You are a senior developer";
        } else {
            return "You are a junior developer";
        }
    }
});

myapp.filter('ageFilter', function(){
    return function(age, defaultAgeLimit) {        
        if(defaultAgeLimit === undefined) {            
            return ageLimitFunction(age, 30);
        } else {
            return ageLimitFunction(age, defaultAgeLimit);
        }    
    }
});

function ageLimitFunction(age, ageLimit) {
    if(age > ageLimit) {
        return "You are a senior";
    } else {
        return "You are a junior";
    }
}

