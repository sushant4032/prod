 <?php
    $qry = json_decode(file_get_contents('php://input'), true);
    // echo json_encode($qry);
    $shift=$qry['shift'];
    $data=$qry['packet'];
    $inp = file_get_contents('shiftData.json');
    $tempArray = json_decode($inp);
    if(!$tempArray){
        $tempArray=[];
    }
    array_push($tempArray, $data);
    $jsonData = json_encode($tempArray);
    file_put_contents('shiftData.json', $jsonData);
    // echo file_get_contents('shiftData.json');
    echo "Update success: $shift";
?>