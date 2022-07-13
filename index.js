'use strict'
var answer={};
var curr_num=0;
function isSolved(m,n){
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(m[i][j]==0)
                return false;
        }
    }
    return true;
}
function canFit(m,n,r,c,num){
    if(m[r][c]!=0)
        return false;
    for(let i=0;i<n;i++){
        if(m[i][c]==num)
            return false;
    }
    for(let j=0;j<n;j++){
        if(m[r][j]==num)
            return false;
    }
    let temp = Math.floor(Math.sqrt(n));
    let row_temp = Math.floor(r/temp);
    let col_temp = Math.floor(c/temp);
    let row_start = (row_temp)*temp;
    let row_end = row_start+temp-1;
    let column_start = (col_temp)*temp;
    let column_end = column_start+temp-1;
    for(let i=row_start;i<=row_end;i++){
        for(let j=column_start;j<=column_end;j++){
            if(m[i][j]==num)
                return false;
        }
    }
    return true;

}
function solve(m,n){
    if(isSolved(m,n)){
        var temp=[];
        for(let i=0;i<n;i++){
            let row  = [];
            for(let j=0;j<n;j++){
                row.push(m[i][j]);
            }
            temp.push(row);
        }
        answer[curr_num] = temp;
        curr_num++;
        return;
    }
    else{
        let r = -1;
        let c = -1;
        let found = false;
        for(let i=0;i<n;i++){
            if(found)
                break;
            for(let j=0;j<n;j++){
                if(m[i][j]==0){
                    r=i;
                    c=j;
                    found = true;
                }
            }
        }
        for(let i=1;i<=n;i++){
            if(canFit(m,n,r,c,i)){
                // var temp  = m;
                m[r][c] = i
                solve(m,n);
                m[r][c] = 0;
            }
        }
    }
}
function preset_init(){
    let ans =[];
    let temp =[];
    temp=[
        [1,8,5,3,6,0,4,0,0],
        [9,6,2,0,0,4,0,7,0],
        [3,0,4,0,2,9,0,6,0],
        [8,2,0,9,4,0,0,1,3],
        [0,4,9,0,3,0,0,5,7],
        [0,0,0,2,0,0,9,8,0],
        [4,0,6,0,0,1,0,0,2],
        [0,0,0,6,9,3,0,0,5],
        [0,0,3,0,8,0,0,0,0]
    ] 
    ans.push(temp);
    temp=[];
    /**************************************/
    temp=[
        [0,7,3,0,0,0,1,4,0],
        [0,0,0,0,0,0,0,0,0],
        [1,0,0,0,7,4,2,9,0],
        [4,0,0,5,3,1,7,0,2],
        [0,5,0,0,0,0,3,8,0],
        [0,0,6,8,2,0,4,0,0],
        [6,0,1,7,5,0,8,0,0],
        [0,4,7,0,1,8,0,3,0],
        [2,3,0,0,9,6,0,1,7]
    ] 
    ans.push(temp);
    temp=[];
    /***************************/
    temp=[
        [0,6,0,1,0,0,7,4,9],
        [0,7,4,5,9,0,6,1,2],
        [0,2,0,0,0,0,3,5,0],
        [0,9,6,8,7,0,0,0,5],
        [5,0,0,0,0,0,0,7,6],
        [7,0,3,0,0,6,0,0,0],
        [6,5,8,4,0,0,0,0,0],
        [0,0,0,0,1,5,8,0,0],
        [9,1,0,6,8,0,0,0,4]
    ] 
    ans.push(temp);
    temp=[];
    /**************************************/
    temp=[
        [0,0,8,3,0,1,0,7,0],
        [0,4,7,5,6,0,0,0,0],
        [0,6,0,0,0,0,2,0,0],
        [0,0,3,0,1,0,0,0,0],
        [0,8,0,0,0,0,0,6,1],
        [0,0,0,4,0,6,8,0,2],
        [5,3,0,0,0,0,4,0,0],
        [8,7,0,9,4,3,0,5,6],
        [1,9,0,6,8,0,3,2,7]
    ] 
    ans.push(temp);
    temp=[];
    /***************************************/
    temp=[
        [0,3,1,0,0,4,7,0,0],
        [6,4,9,2,0,0,0,8,0],
        [0,2,7,6,1,0,4,0,9],
        [9,6,2,0,7,8,0,0,0],
        [0,0,5,0,0,9,6,0,3],
        [3,0,0,5,0,0,0,0,0],
        [0,9,0,8,0,0,0,1,0],
        [0,1,8,0,0,5,0,3,0],
        [7,5,3,0,0,0,0,2,4]
    ] 
    ans.push(temp);
    temp=[];
    /*****************************************/
    return ans;
}
/*********main************ */
let preset=[];
preset = preset_init();
let curr_index_no = -1;
// let array =[];
// for(let i=1;i<=9;i++){
//     let row =[];
//     for(let j=1;j<=9;j++){
//         row.push(0);
//     }
//     array.push(row);
// }

// console.log("Enter the elements of the sudoku puzzle: ");
// array=[
//     [1,8,5,3,6,0,4,0,0],
//     [9,6,2,0,0,4,0,7,0],
//     [3,0,4,0,2,9,0,6,0],
//     [8,2,0,9,4,0,0,1,3],
//     [0,4,9,0,3,0,0,5,7],
//     [0,0,0,2,0,0,9,8,0],
//     [4,0,6,0,0,1,0,0,2],
//     [0,0,0,6,9,3,0,0,5],
//     [0,0,3,0,8,0,0,0,0]
// ] 
// solve(array,9);
// console.log(ans[0]);
document.querySelector('.new').addEventListener('click',function(){
    for(var key in answer){
        delete answer[key];
    }
    curr_num=0;
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            document.querySelector('table '+'.row'+i+" "+'.col'+j+" input").value ="";
            document.querySelector('table '+'.row'+i+" "+'.col'+j+" input").style.fontWeight = "normal";
        }
    }
    let no = Math.floor(Math.random()*preset.length);
    curr_index_no = no;
    // console.log(preset[no]);
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(preset[no][i][j]!==0){
                document.querySelector('table '+'.row'+i+" "+'.col'+j+" input").value = preset[no][i][j];
                document.querySelector('table .row'+i+" .col"+j+" input").style.fontWeight = "bold";
            }
        }
    }
});
/********************************Check function in the sudoku****************************************/
let errorLog ={};
document.querySelector('.check').addEventListener('click',function(){
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
              document.querySelector('table '+'.row'+i+" "+'.col'+j+" input").style.backgroundColor="";
        }
    }
    let chk = checkForErrors();
    if(chk!=0){
        // console.log(chk);
        // alert('there are some errors, please resolve it and the error is '+chk);
        if(chk==1){
            document.querySelector('table '+'.row'+errorLog[1][0]+" "+'.col'+errorLog[1][1]+" input").style.backgroundColor ="#eb483d";
        }
        else if(chk==2){
            for(let j=0;j<9;j++){
                document.querySelector('table '+'.row'+errorLog[2][0]+" "+'.col'+j+" input").style.backgroundColor ="#e33327";
            }
        }
        else if(chk==3){
            console.log(errorLog[3][0],errorLog[3][1]);
            for(let i=0;i<9;i++){
                document.querySelector('table '+'.row'+i+" "+'.col'+errorLog[3][1]+" input").style.backgroundColor ="#e33327";
            }
        }
        else{
            for(let i=errorLog[4][0];i<=errorLog[4][2];i++){
                for(let j=errorLog[4][1];j<=errorLog[4][3];j++){
                    document.querySelector('table '+'.row'+i+" "+'.col'+j+" input").style.backgroundColor ="#e33327";
                }
            }
        }
    }
    else{
        alert('Congratulations you have successfully solved the puzzle🎉');
    }
});
function checkForErrors(){
    for(const key in errorLog){
        delete errorLog[key];
    }

    for(let i=0;i<9;i++){
        let mySet = new Set()
        for(let j=0;j<9;j++){
            if(document.querySelector('table '+'.row'+i+" "+'.col'+j+" input").value=="" || document.querySelector('table '+'.row'+i+" "+'.col'+j+" input").value =="0")
                continue;
            let temp = parseInt(document.querySelector('table '+'.row'+i+" "+'.col'+j+" input").value);
            if(mySet.has(temp))
            {
                let arr_temp = [];
                arr_temp.push(i);
                arr_temp.push(j);
                errorLog[2] = arr_temp; 
                return 2;
            }
                
            else
                mySet.add(temp);
        }
    }
    for(let i=0;i<9;i++){
        let mySet = new Set()
        for(let j=0;j<9;j++){
            if(document.querySelector('table '+'.row'+j+" "+'.col'+i+" input").value=="" || document.querySelector('table '+'.row'+j+" "+'.col'+i+" input").value =="0")
                continue;
            let temp = parseInt(document.querySelector('table '+'.row'+j+" "+'.col'+i+" input").value);
            if(mySet.has(temp))
            {
                let arr_temp = [];
                arr_temp.push(j);
                arr_temp.push(i);
                errorLog[3] = arr_temp; 
                return 3;
            }
            else
                mySet.add(temp);
        }
    }
    let start_r=0,start_c=0,end_r=2,end_c=2;
    for(let i=0;i<9;i++){
        let set = new Set();
        for(let j=start_r;j<=end_r;j++){
            for(let k=start_c;k<=end_c;k++){
                if(document.querySelector('table '+'.row'+j+" "+'.col'+k+" input").value ==""|| document.querySelector('table '+'.row'+j+" "+'.col'+k+" input").value=="0")
                    continue;
                let temp = parseInt(document.querySelector('table '+'.row'+j+" "+'.col'+k+" input").value);
                if(set.has(temp)){
                    let arr_temp =[];
                    arr_temp.push(start_r);
                    arr_temp.push(start_c);
                    arr_temp.push(end_r);
                    arr_temp.push(end_c);
                    errorLog[4] = arr_temp;
                    return 4;
                }
                else
                    set.add(temp);

            }
        }
        if(i<2 || (i>2 && i<5) || (i>5 && i<8)){
            start_c+=3;
            end_c+=3;
        }
        else{
            start_r+=3;
            end_r+=3;
            start_c =0;
            end_c =2;
        }
    }
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            // console.log(isNaN(document.querySelector('table '+'.row'+i+" "+'.col'+j+" input").value),document.querySelector('table '+'.row'+i+" "+'.col'+j+" input").value);
            if(document.querySelector('table '+'.row'+i+" "+'.col'+j+" input").value === "" || document.querySelector('table '+'.row'+i+" "+'.col'+j+" input").value==="0")
            {
                // console.log(document.querySelector('table '+'.row'+i+" "+'.col'+j+" input").value,i,j);
                let arr_temp = [];
                arr_temp.push(i);
                arr_temp.push(j);
                errorLog[1] = arr_temp; 
                return 1;

            }
                
        }
    }

    return 0;
}
/**********************************************SolveFunction in sudoku**************************/
document.querySelector('.solve').addEventListener('click', function(){
    if(checkForErrors()>1)
        {
            alert('there are some errors in your sudoku grid press check to press it and rectify the error before pressing solve.');
            return;
        }
    // if(curr_index_no===-1){
        let temp_solve=[];
        for(let i=0;i<9;i++){
            let temp_row_arr =[]
            for(let j=0;j<9;j++){
                let temp321 = document.querySelector('table '+'.row'+i+" "+'.col'+j+" input").value;
                if(temp321=="" || temp321=="0"){
                    temp_row_arr.push(0);
                }
                else{
                    document.querySelector('table .row'+i+" .col"+j+" input").style.fontWeight = "bold";
                    temp_row_arr.push(parseInt(temp321));
                }
            }
            temp_solve.push(temp_row_arr);
        }
        // console.log('hellow orld');
        solve(temp_solve,9);
        if(Object.keys(answer).length===0)
            {
                alert('no solution possible');
                return;
            }
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                // console.log(Object.keys(answer).length);
                document.querySelector('table '+'.row'+i+" "+'.col'+j+" input").value = answer[0][i][j];
            }
        }
        return;
    // }
    // solve(preset[curr_index_no],9);
    // for(let i=0;i<9;i++){
    //     for(let j=0;j<9;j++){
    //         document.querySelector('table '+'.row'+i+" "+'.col'+j+" input").value = answer[0][i][j];
    //     }
    // }
})
// for(let i=0;i<9;i++){
//     for(let j=0;j<9;j++){
//         console.log(ans[0][i][j]+" ");
//     }
//     console.log(" ");
// }

