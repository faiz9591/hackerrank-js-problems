function kangaroo(x1, v1, x2, v2) {
    if (v1 <= v2) return 'NO';
    let meetingPoint = (x2 - x1)/(v1 - v2);
if (Math.floor(meetingPoint) === meetingPoint){
    return 'YES';
}
return 'NO';
}