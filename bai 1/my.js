let start_number= parseInt(prompt('nhap vao 1 so bat ky'));
let sum=0;
document.write('Ban da nhap vao so' + start_number+'<br>');
sum=sum+start_number;

while (start_number!=-1){
start_number=parseInt(prompt('nhap vao 1 so bat ky'));
document.write('Ban da nhap vao so' + start_number+'<br>');
sum=sum+start_number;
}
document.write('Tong cua cac so vua nhap la '+sum);