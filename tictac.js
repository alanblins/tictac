const winCaseiJ = createBin((i,j)=>i=j, 3);
const winCases = [
    createBin((i,j)=>i==0, 3),
    createBin((i,j)=>i==1, 3),
    createBin((i,j)=>i==2, 3),
    createBin((i,j)=>j==0, 3),
    createBin((i,j)=>j==1, 3),
    createBin((i,j)=>j==2, 3),
    createBin((i,j)=>i==j, 3),
    createBin((i,j)=>i+j==2, 3),
];

const winValues = winCases.map( scenario => {
    return converToNumber(scenario);
})

function converToNumber(scenario){
    return parseInt(scenario.map( c=> c.join('')).join(''), 2);
}


const case1 = [
    [1,0,1],
    [0,1,0],
    [1,0,1]
]
const caseValue = converToNumber(case1);

const won = winValues.some( winValue => (winValue & caseValue) == winValue);
if(won){
    console.log('win');
}else{
    console.log('lose');
}


function createBin(fn, size){
    const lines = [];
    for(let i=0;i<size;i++){
        lines[i] = [];
        for(let j=0;j<size;j++){
            lines[i][j] = fn(i,j) ? 1 : 0;
        }
    }
    return lines;
}