const { Router } = require('express');
const reverseList = require('../../utils/reverse');
const response = require('../../network/responses');

const router = Router();

router.post('/', async (req, res) => {
  try {
    if (req.body.list) {
      const reversedList = await reverseList(req.body.list);
      response.success(req, res, reversedList, 200);
    } else {
      response.error(req, res, 'A list is needed', 400, 'Bad Request');
    }
  } catch (error) {
    response.error(req, res, 'Server Error', 400, error.message);
  }
});

module.exports = router;
