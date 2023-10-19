// one worker
// function simulateMining(path, time) {
//     // Ready to work :)
//     let pathAry = [path];
//     let pathNext;
//     for (let i = 0; i < time - 1; i++) {
//         pathNext = pathAry[i].split("");
//         for (let charIdx = 0; charIdx < path.length; charIdx++) {
//             if (pathAry[i][charIdx] === "<") {
//                 if (pathAry[i][charIdx - 1] === "M") {
//                     pathNext.splice(0,2,"*",".");
//                 }else{
//                     pathNext.splice(charIdx - 1,2,"<",".");
//                 }
//             } else if (pathAry[i][charIdx] === ">") {
//                 if(pathAry[i][charIdx + 1] === "B"){
//                     pathNext.splice(charIdx,2,".","*");
//                 }else{
//                     pathNext.splice(charIdx,2,".",">");
//                 }
//             } else if (pathAry[i][charIdx] === "*") {
//                 if(charIdx === 0){
//                     pathNext.splice(0,2,"M",">");
//                 }else{
//                     pathNext.splice(charIdx - 1,2,"<","B");
//                 }
//             }
//         }
//         pathAry.push(pathNext.join(""));
//     }
//     console.log(pathAry)
//     // return pathAry;
// }

function simulateMining(path, time) {
    // Ready to work :)
    let pathAry = [path];
    let pathNext;
    for (let i = 0; i < time - 1; i++) {
        pathNext = pathAry[i].split("");
        for (let charIdx = 0; charIdx < path.length; charIdx++) {
            if (pathAry[i][charIdx] === "<") {
                if(pathAry[i][charIdx - 2] === ">"){
                    pathNext.splice(charIdx - 1,2,"#",".");
                }else if(pathAry[i][charIdx - 1] === "*"){
                    pathNext.splice(charIdx - 1,2,"*",">");
                }else if (pathAry[i][charIdx - 1] === "M") {
                    if(pathAry[i][charIdx + 1] === "<"){
                        pathNext.splice(charIdx - 1,1,"*");
                    }else{
                        pathNext.splice(0,2,"*",".");
                    }
                }else{
                    pathNext.splice(charIdx - 1,2,"<",".");
                }
            } else if (pathAry[i][charIdx] === ">") {
                if(pathAry[i][charIdx - 1] === ">"){
                    if(pathAry[i][charIdx + 1] === "B"){
                        pathNext.splice(charIdx,2,">","*");
                    }else{
                        pathNext.splice(charIdx + 1,1,">");
                    }
                }else if(pathAry[i][charIdx + 1] === "B"){
                    pathNext.splice(charIdx,2,".","*");
                }else{
                    pathNext.splice(charIdx,2,".",">");
                }
            } else if (pathAry[i][charIdx] === "*") {
                if(charIdx === 0){
                    pathNext.splice(0,2,"M",">");
                }else{
                    if(pathAry[i][charIdx - 1] === ">"){
                        pathNext.splice(charIdx - 1,2,"<","*");
                    }else{
                        pathNext.splice(charIdx - 1,2,"<","B");
                    }
                }
            }else if (pathAry[i][charIdx] === "#") {
                pathNext.splice(charIdx - 1,3,"<",".",">");
            }
        }
        pathAry.push(pathNext.join(""));
    }
    console.log(pathAry)
    // return pathAry;
}

simulateMining('M.>>.B',15)