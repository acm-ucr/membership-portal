import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase";

export default async function get5Announcements(req, res) {
  const announcements = [];

  const querySnapshot = await getDocs(collection(db, "announcement"));

  querySnapshot.forEach((doc) => {
    announcements.push({
      id: doc.id,
      data: doc.data(),
    });
  });

  // const swapArrMem = (arr, a, b) => {
  //   const temp = arr[a];
  //   arr[a] = arr[b];
  //   arr[b] = temp;
  // };

  // const partition = (arr, start, end) => {
  //   let pivotindex = start;
  //   const pivotvalue = arr[end].data.time.seconds;
  //   // console.log(arr[end].data.time.seconds);

  //   for (let i = start; i < end; i++) {
  //     // console.log(arr[i].data.time.seconds);

  //     if (arr[i].data.time.seconds < pivotvalue) {
  //       swapArrMem(arr, i, pivotindex);
  //       pivotindex++;
  //     }
  //   }

  //   swapArrMem(arr, pivotindex, end);
  //   return pivotindex;
  // };

  // const quickSort = (announcements, start, end) => {
  //   // console.log(a.data.time.seconds);

  //   if (start >= end) return;

  //   const index = partition(announcements, start, end);
  //   quickSort(announcements, start, index - 1);
  //   quickSort(announcements, index + 1, end);
  // };

  const top5 = announcements
    .sort(
      (firstItem, secondItem) =>
        secondItem.data.time.seconds - firstItem.data.time.seconds
    )
    .slice(0, 5);

  res.status(200).json(top5);
}
