# jQuery Object Flatten #
jQuery Plugin for Flatten Nested Array and Object to 2D

## Your Object or JSON ##
```
{
    "feature": {
        "exterior": {
            "front_lamp": "Halogen",
            "spoiler": true
        },
        "interior": {
            "additional_seat": true,
            "air_conditioner": true
        }
    },
    "name": "Honda HRV",
    "spec": {
        "color": "Black",
        "engine": {
            "fuel_system": "PGM FI",
            "type": "SOHC 16 Valve i-VTEC"
        }
    },
    "type": "Car"
}
```

## Result ##

```
{
    "feature.exterior.front_lamp": "Halogen",
    "feature.exterior.spoiler": true,
    "feature.interior.additional_seat": true,
    "feature.interior.air_conditioner": true,
    "name": "Honda HRV",
    "spec.color": "Black",
    "spec.engine.fuel_system": "PGM FI",
    "spec.engine.type": "SOHC 16 Valve i-VTEC",
    "type": "Car"
}
```

## How To Use ##
```
$(function(){
	flatten = $.objectFlatten( the_object );
	console.log(flatten);
});
```