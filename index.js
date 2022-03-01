    var edit = 0;
    var row = 0;

    function calage() {
        var dob = new Date($("#dob").val())

        var bday = dob.getDate();
        var bmonth = dob.getMonth();
        var byear = dob.getFullYear();

        var present = new Date();
        var pday = present.getDate();
        var pmonth = present.getMonth();
        var pyear = present.getFullYear();

        if (pmonth > bmonth) {
            var age = pyear - byear
        } else if (bmonth == pmonth) {
            if (pday >= bday) {
                var age = pyear - byear
            } else {
                var age = (pyear - byear) - 1
            }
        } else {
            var age = (pyear - byear) - 1
        }

        if (age < 0) {
            alert("Enter Valid DOB")
        } else {
            $("#age").val(age)
        }
    }

    var counts = 0;

    function addentry() {
        $(".main-table")[0].style.display = "block";

        var name = $("#name").val()
        var subject = $("#subject").val()
        var education = $("#education").val()
        var dob = $("#dob").val()
        var age = $("#age").val()
        var salary = $("#salary").val()
        var row = `<tr id="r` + counts + `" ><td class="ename" id="edname` + counts + `">` + name + `</td><td class="esubject" id="edsubject` + counts + `">` + subject + `</td><td class="eeducation" id="ededucation` + counts + `">` + education + `</td><td class="edob" id="eddob` + counts + `">` + dob + `</td> <td class="eage" id="edage` + counts + `">` + age + `</td><td class="esalary" id="edsalary` + counts + `">` + salary + `</td><td class="actioncol"><button class="action-but viewclass" id="aview"><img src="view.png" alt="delete" srcset="" width="auto"></button></td><td><button class="action-but" id="adpl"><img src="duplicate.png" alt="delete" srcset="" width="auto"></button></td><td><button class="action-but" id="adel"><img src="delete.png" alt="delete" srcset="" width="auto"></button></td><td><button class="action-but " id ="hdel"><img src="harddelete.png" alt="delete" srcset="" width="auto"></button></td>`

        tabledata = $("table#data-table tbody");

        tabledata.append(row);
        // $(".val").val("")
        // $("#subject").html()
        reset();

        var total = 0;
        $('tr').each(function () {
            $(this).find('.esalary').each(function () {
                var stotal = $(this).text();
                if (stotal.length != 0 || stotal != 0) {
                    total = total + parseInt(stotal);
                }
            })
        })
        $("#tsalary").val(total)
        counts = counts + 1;
    }

    // view and edit 

    var neweditpresentrow;
    var nsrowsid;
    var presentrow = null

    $(document).on('click', '.viewclass', function () {
        var presentrow = $(this).closest('tr');
        neweditpresentrow = $(this).closest('tr')[0];



        var idname = presentrow.find('.ename').attr('id');

        var name = presentrow.find((".ename")).text()
        var subject = presentrow.find((".esubject")).text();
        console.log(subject)
        var education = presentrow.find((".eeducation")).text()
        var dob = presentrow.find((".edob")).text()
        var age = presentrow.find((".eage")).text()
        var salary = presentrow.find((".esalary")).text()
        $("#name").val(name)
        $("#subject").val(subject)
        $("#education").val(education)
        $("#dob").val(dob)
        $("#age").val(age)
        $("#salary").val(salary)
        $("#editbut").attr('rowid', idname);
        $("#editbut").css("display", "flex")
        $("#reset").css("display", "flex")
        $(".subbut").css("display", "none")

        $(document).on('click', '.editbutton', function () {

            nsrowsid = $(neweditpresentrow).attr('id')

            var yn = "#" + nsrowsid + ""

            var editname = $("#name").val()
            var editsubject = $("#subject").val()
            var editeducataion = $("#education").val()
            var editdob = $("#dob").val()
            var editage = $("#age").val()
            var editsalary = $("#salary").val()

            var tableedit = $("#data-table tbody")[0]

            var pqrow = $(tableedit).find(yn)[0]

            $(pqrow).find(".ename").text(editname)
            $(pqrow).find(".esubject").text(editsubject)
            $(pqrow).find(".eeducation").text(editeducataion)
            $(pqrow).find(".edob").text(editdob)
            $(pqrow).find(".eage").text(editage)
            $(pqrow).find(".esalary").text(editsalary)



            var total = 0;
            $('tr').each(function () {
                $(this).find('.esalary').each(function () {
                    var stotal = $(this).text();
                    if (stotal.length != 0 || stotal != 0) {
                        total = total + parseInt(stotal);
                    }
                })
            })
            $("#tsalary").val(total)




            // $("#editbut").css("display", "none")
            // $("#reset").css("display", "flex")
            // $(".subbut").css("display", "none")
            // $(".val").val("")
            // $("#subject").html()
            reset();
        })


    })


    var dplcount = 0;
    $(document).on('click', '#adpl', function () {
        var dup = $(this).parent().parent().html();
        var presentrow = $(this).closest('tr');
        tabledata = $("table#data-table tbody");
        var duprowid = $(presentrow).attr('id');
        var duprowid2 = duprowid + dplcount;

        tabledata.append('<tr id ="' + duprowid2 + '">' + dup + '</tr>');
        dplcount = dplcount + 1;

        var total = 0;
        $('tr').each(function () {
            $(this).find('.esalary').each(function () {
                var stotal = $(this).text();
                if (stotal.length != 0 || stotal != 0) {
                    total = total + parseInt(stotal);
                }
            })
        })
        $("#tsalary").val(total)

    })

    $(document).on('click', '#hdel', function () {
        $(this).parent().parent().remove();
        var total = 0;
        $('tr').each(function () {
            $(this).find('.esalary').each(function () {
                var stotal = $(this).text();
                if (stotal.length != 0 || stotal != 0) {
                    total = total + parseInt(stotal);
                }
            })
        })
        $("#tsalary").val(total)
    })


    $(document).on('click', '#adel', function () {
        var task = $(this).parent().parent().css("background-color", "red");
    })




    function reset() {
        // alert(12)
        var dp = $("#subject").html()
        $(".val").val("")
        $("#subject").val(dp)
        $(".editbutton").css("display", "none")
        $(".subbut").css("display", "flex")
        $("#reset").css("display", "none")
    }

    function adddrop(){
        var dpvalue = $("#dynamicdp").val()
        $("#subject").append('<option value="'+dpvalue+'">'+dpvalue+'</option>')
        $("#dynamicdp").val("")
    }