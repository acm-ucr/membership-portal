import { getDocs, collection, query, limit, orderBy } from "firebase/firestore";
import { db } from "../../firebase";

export default async function get5Announcements(req, res) {
  const announcements = [];
  const announcementRef = collection(db, "announcement");

  // custom query to get 5 most recent announcements
  const mostRecentQuery = query(
    announcementRef,
    orderBy("time", "asc"),
    limit(5)
  );

  // old code
  const querySnapshot = await getDocs(mostRecentQuery);

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

  res.status(200).json(announcements);
}
