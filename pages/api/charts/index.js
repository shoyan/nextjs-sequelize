export default async function handler(req, res) {
    const response = {
        type: 'bar',
        title: "Fruits consume each person",
        series: [{
          name: 'Jane',
          data: [1, 0, 4]
        }, {
          name: 'John',
          data: [5, 7, 3]
        }],
        categories: ['Apples', 'Bananas', 'Oranges'],
        yAxis: {
          title: {
            text: 'Fruit eaten'
          },
        }
    }
    res.status(200).json(response);
};