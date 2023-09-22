function constructionCrew(obj){
  const res = Object.assign({}, obj);

  if (res.dizziness){
    res.levelOfHydrated += 0.1 * res.weight * res.experience;
    res.dizziness = false;
    //console.log(res);
    return res;
  } else {
    //console.log(res);
    return res;
  }
}
constructionCrew(
  { weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  
);

constructionCrew(
  { weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }  
);

constructionCrew(
  { weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }  
);