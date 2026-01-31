const negativeTestCases = [
  { id: 'NEG_01', input: 'www.google.lk', notExpected: 'www.google.lk' },
  { id: 'NEG_02', input: 'www.superlime.lk', notExpected: 'www.superlime.lk' },
  { id: 'NEG_03', input: 'mamahetaofficeyanavaa', notExpected: 'මම හෙට office යනවා' },
  { id: 'NEG_04', input: 'adoo machan eka nam siraavata awul', notExpected: 'අඩෝ මචන් ඒක නම් සිරාවට අවුල්' },
  { id: 'NEG_05', input: 'rangadisanayake75@gmail.com', notExpected: 'rangadisanayake75@gmail.com' },
  { id: 'NEG_06', input: 'B.M.I.T. module eka', notExpected: 'derana news.lk' },
  { id: 'NEG_07', input: 'derana news.lk', notExpected: 'Dr. නාමල්' },
  { id: 'NEG_08', input: 'I.T.P module eka', notExpected: 'I.T.P module එක' },
  { id: 'NEG_09', input: 'api meet vemu', notExpected: 'අපි meet වෙමු' },
  { id: 'NEG_10', input: '38/3 hamparawa,bandarawela', notExpected: '38/3 හම්පරාව, බන්ඩාරවෙල' }
];



export default negativeTestCases;