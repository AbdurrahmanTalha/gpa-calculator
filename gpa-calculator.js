// প্রাকটিস চ্যালেঞ্জ -১:  

// ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছো। তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জানো না। তবে তাদের নম্বর জানো. আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে দিতে পারবে?

// ১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.

// ২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.

// ৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.

// ৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.

// ৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.

// ৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A+.



// প্রাকটিস প্রব্লেম-২: 

// তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো। 

const students = [
    {
        name: 'Alia',
        marks: 95
    },
    {
        name: 'Dalia',
        marks: 66
    },
    {
        name: 'Salia',
        marks: 80
    },
    {
        name: 'Malia',
        marks: 59
    },
    {
        name: 'Lilia',
        marks: 47
    },
    {
        name: 'Jalaia',
        marks: 77
    }
];

for (let i = 0; i < students.length; i++) {
    if (students[i].marks < 50) {
        students[i].grade = 'F'
    } else if (students[i].marks < 60) {
        students[i].grade = 'D'
    } else if (students[i].marks < 70) {
        students[i].grade = 'C'
    } else if (students[i].marks < 80) {
        students[i].grade = 'B'
    } else if (students[i].marks < 90) {
        students[i].grade = 'A'
    } else if (students[i].marks <= 100) {
        students[i].grade = 'A+'
    } else {
        students[i].grade = 'Invalid Marks'
    }
    console.log(students[i]);
}

// Output
// { name: 'Alia', marks: 95, grade: 'A+' }
// { name: 'Dalia', marks: 66, grade: 'C' }
// { name: 'Salia', marks: 80, grade: 'A' }
// { name: 'Malia', marks: 59, grade: 'D' }
// { name: 'Lilia', marks: 47, grade: 'F' }
// { name: 'Jalaia', marks: 77, grade: 'B' }

const afnan = {
    name: "Afnan Ferdousi",
    isStudent: true,
    age: 16,
    class: "Acca part-1",
    address: "sylhet"
}
const talha = {
    name: "Abdur Rahman Talha",
    isStudent: true,
    age: 11,
    class: "Web Development",
    address: "sylhet"
}
console.log(talha.age);

// const familyMembers =[afnan,talha];
const familyMembers = [
    {
        name: "Afnan Ferdousi",
        isStudent: true,
        age: 16,
        class: "Acca part-1",
        address: "sylhet"
    },
    {
        name: "Abdur Rahman Talha",
        isStudent: true,
        age: 11,
        class: "Web Development",
        address: "sylhet"
    }
];

console.log(familyMembers.indexOf(talha));
console.log(students[0].name)
console.log(students[1].marks)
familyMembers[0].class="Acca part-2";
console.log(familyMembers[0].class);
