defineThreeUniverse(function () {

    let local_part = "https://shakthi.github.io/PartUniverse/";

    let maping = [
        {
            position: { x: 0, z: -100 },
            radius: 200,
            description: "IcosahedronGeometry",
            url: "https://shakthi.github.io/ThreeJSUniverse/src/universe_parts/sampleMeshModule.js"

        },
        {
            position: { x: 200, z: -500 },
            radius: 200,
            description: "IcosahedronGeometry",
            url: "https://shakthi.github.io/ThreeJSUniverse/src/universe_parts/sampleMeshModule.js"
        },
        {
            position: { x: 0, z: 0 },
            radius: 10000,
            description: "Grass ground with single texture",
            url: "https://shakthi.github.io/ThreeJSUniverse/src/universe_parts/grassGround.js",
            credits: "https://threejs.org/examples/#webgl_animation_cloth"
        },

        {
            position: { x: 0, z: 0 },
            radius: 10000,
            credits: "https://www.turbosquid.com/",
            url: "https://shakthi.github.io/ThreeJSUniverse/src/universe_parts/lonetree.js",
        },
        {
            position: { x: 100, z: 100 },
            radius: 10000,
            credits: "https://www.turbosquid.com/",
            url: "https://shakthi.github.io/PartUniverse/src/universe_parts/smallforest.js",
        },
        {
            position: { x: 0, z: 0 },
            radius: 10000,
            url: "https://shakthi.github.io/ThreeJSUniverse/src/universe_parts/directionalLight.js",
            //credits: "https://threejs.org/examples/#webgl_animation_cloth"
        },
        {
            position: { x: 0, z: -2700, y: 0 },
            radius: 1000,
            description: "Futeristic ground",
            url: "https://shakthi.github.io/ThreeJSUniverse/src/universe_parts/futureGround.js",
        },
        {
            position: { x: 542, y: 0, z: -582 },
            radius: 1000,
            description: "Simple cube ground",
            url: "https://ashwithags.github.io/ThreeJSUniverse/src/universe_parts/simpleCube.js",
        }, {
            position: { x: 600, z: 100 },
            radius: 1000,
            credits: "https://www.turbosquid.com/",
            url: "https://shakthi.github.io/PartUniverse/src/universe_parts/hut.js",
        },



    ];

    return Promise.resolve({ maping, local_part });

})
