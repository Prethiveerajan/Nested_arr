function check()
{
    
    var num1 = [1,2,3,4]
    var num2 = [0,6] 
    
    for(var i = 0; i<num1.length; i+=1)
    {
        a_max = a_min =  num1[0];
        if(a_max<=num1[i])
        {
            a_max = num1[i]
        }
        else
        {
            a_min = num1[i]
        }
    }

    for(var i = 0; i<num2.length; i+=1)
    {
        b_max = b_min = num2[0]
        if(b_max<=num2[i])
        {
            b_max = num2[i]
        }
        else
        {
            b_min = num2[i]
        }
    }
    (a_max < b_max && a_min > b_min)?console.log("TRUE"):console.log("FALSE")
}

check.call()