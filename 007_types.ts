// Boolean
let paidAccount : boolean = true;

// Number 
let age : number = 33;
var taxRate : number = 7.5;

// String
var fullName : string = "nicole tingey";

// Array
var ages : number[] = [33, 28, 11];

// Tuple
let player : [number, string];
player = [3, 'Corey'];

// Enum
enum ApprovalStatus {Approved, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;

// Any (very error prone)
var apiData : any [] = [123, 'nicole', true];

// Void
function printOut(msg:string) : void {
	console.log(msg);
}




