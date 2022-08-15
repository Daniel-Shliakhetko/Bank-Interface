const bills = [
  {
    slug: "bill-01",
    name: "Bill 01",
    description: "Aliquam erat volutpat maec",
    money: 3500,
    expenses: [
      {
        name: "Sit amet",
        description: "Proin vit.",
        money: -570,
      },
      {
        name: "Congue",
        description: "Proin vit.",
        money: 1200,
      },
      {
        name: "Enim",
        description: "Proin vit.",
        money: -380,
      }
    ],
  },
  {
    slug: "bill-02",
    name: "Bill 02",
    money: 650,
    expenses: [
      {
        name: "Sit amet",
        description: "Proin vit.",
        money: -570,
      },
    ],
  },
  {
    slug: "bill-03",
    name: "Bill 03",
    money: 480,
  },
];

const getBillBySlug = (slug) => {
  let answer = "";
  bills.map((bill) => {
    if (bill.slug === slug) {
      answer = bill;
    }
  });
  return answer;
};

export { bills, getBillBySlug };
