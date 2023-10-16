export const arrayItems = [
  {
    name: "Q&A",
    id: "q&a",
    description: "Menjawab pertanyaan dan memberikan conten yang ada inginkan.",
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    },
  },
  {
    name: "Grammer Correction",
    id: "grammerCorrection",
    description: "Memperbaiki kalimat menjadi bahasa Inggris standar.",
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "Summarize for a 2nd grader",
    id: "summary",
    description: "Menerjemahkan teks yang sulit menjadi konsep yang lebih sederhana.",
    option: {
      model: "text-davinci-003",
      temperature: 0.7,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "English to Other languages",
    id: "translate",
    description: "Menerjemahkan teks dalam bahasa Inggris ke bahasa Prancis, Spanyol, dan Jepang.",
    option: {
      model: "text-davinci-003",
      temperature: 0.3,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "Movie to Emoji",
    id: "movieToEmoji",
    description: "Mengubah judul film menjadi emoji.",
    option: {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  {
    name: "Explain code",
    id: "explainCode",
    description: "Menjelaskan potongan kode yang rumit.",
    option: {
      model: "code-davinci-002",
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
  },
  // {
  //   name: "JavaScript to Python",
  //   id: "jstopy",
  //   description: "Convert simple JavaScript expressions into Python.",
  //   option: {
  //     model: "code-davinci-002",
  //     temperature: 0,
  //     max_tokens: 64,
  //     top_p: 1.0,
  //     frequency_penalty: 0.0,
  //     presence_penalty: 0.0,
  //   },
  // },
];
