const comments = [
  {
    commentId: 1,
    commentContent: 'Hai',
    replies: [
      {
        commentId: 11,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 111,
            commentContent: 'Haai juga hai jugaa',
          },
          {
            commentId: 112,
            commentContent: 'Haai juga hai jugaa',
          },
        ],
      },
      {
        commentId: 12,
        commentContent: 'Hai juga',
        replies: [
          {
            commentId: 121,
            commentContent: 'Haai juga hai jugaa',
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: 'Halooo',
  },
];

// Case 2
// Soal 5 Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua
// balasan komentar. Berdasarkan data di atas, total komentar adalah 7 komentar.

function countComments(comments) {
  // menghitung komen utama
  let count = comments.length;

  comments.forEach((comment) => {
    // menghitung reply
    if (comment.replies) {
      count += countComments(comment.replies);
    }
  });

  return count;
}

const totalComments = countComments(comments);

// Hasil: 7
console.log(totalComments);
