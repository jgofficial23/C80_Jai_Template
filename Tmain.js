
name_of_the_student_array = [];
    
function submit()
{
    var display_student_array = [];

    for () 
    {
        var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_student);
        
    }

    console.log(name_of_the_student_array);

    var lenght_of_name_of_students_array = name_of_the_student_array.length;
    console.log(lenght_of_name_of_students_array);

    for () 
    {
        display_student_array.push("<h4>NAME - "+ name_of_the_student_array[k] + "</h4>");
        console.log(display_student_array);
    }

    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;



    document.getElementById("submit_button").style.display = "";
    document.getElementById("sort_button").style.display = "";

}

function sorting()
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);

    var display_student_array_sorting = [];

    var lenght_of_name_of_students_array = name_of_the_student_array.length;
    console.log(lenght_of_name_of_students_array);

    for () 
    {
        display_student_array_sorting.push("<h4>NAME - " + name_of_the_student_array[k] + "</h4>");
        console.log(display_student_array_sorting);
    }

    document.getElementById("display_name_with_commas").innerHTML = display_student_array_sorting;
}






