export default async function handler(req, res) {
    const syllabuses = [
        //array of syllabus with id, name , image and respective contents
      { id: 1, name: 'Math (NCERT)', imageUrl: 'ncert.png' , dropdownItems: ['Math (NCERT) 1', 'Math (NCERT) 2', 'Math (NCERT) 3']  },
      { id: 2, name: 'Math Foundations', imageUrl: 'ncert.png' , dropdownItems: ['Math Foundations 1', 'Math Foundations 2', 'Math Foundations 3']  },
      { id: 3, name: 'Math (Maharashtra)', imageUrl: 'ncert.png' ,dropdownItems: ['Math (Maharashtra) 1', 'Math (Maharashtra) 2', 'Math (Maharashtra) 3']  },
      { id: 4, name: 'PACE (SOE Punjab)', imageUrl: 'pace.png' ,dropdownItems: ['PACE 1', 'PACE 2', 'PACE 3']  },
      { id: 5, name: 'Science (NCERT)', imageUrl: 'pace.png' ,dropdownItems: ['Science 1', 'Science 2', 'Science 3']  },
      { id: 6, name: 'All State boards', imageUrl: 'ncert.png' ,dropdownItems: ['All 1', 'All 2', 'All 3']  },
    ];
  
    //respond with array of syllabuses as JSON
    res.status(200).json(syllabuses);
  }
  