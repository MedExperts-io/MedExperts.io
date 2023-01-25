'use strict'

const {db, models: {User, Question_Answer} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123', email: 'cody@lol.com', isAdmin: false, firstName: 'cody', lastName: 'cody', school: 'harvard med', expertise: 'student'}),
    // User.create({ username: 'murphy', password: '123' }),
  ])





  const Question = await Promise.all([

    
    //Q1
    Question_Answer.create({ 
      question: 'A 50-year-old male comes to the clinic for evaluation for progressive shortness of breath. PFT of the patient suggests which of the following? Pulmonary function tests are provided below: ', 
      questionImage: ['public/Images/Q1/Q1 img1.png','public/Images/Q1/Q1img2.png'], 
      answerOptions: ['Obstructive Lung Disease', 'Restrictive Lung Disease', 'Nonspecific Pattern', 'Mixed Ventilatory Defect',],
      correctAnswer:'Nonspecific Pattern ',
      explanation: `An obstructive ventilatory defect is a disproportionate reduction in maximal airflow from the lung in relation to the maximal volume (i.e. vital capacity, VC) that can be displaced from the lung [1]. It is defined by a reduced Forced Expiratory Volume in 1 second (FEV1)/FVC ratio below the 5th percentile of the predicted value as per ATS/ERS task force [1] or less than 0.70.   In this patient FEV1/FVC is normal.   

      A restrictive ventilatory defect is characterized by a reduction in TLC below the 5th percentile of the predicted value, and a normal FEV1/FVC. In this patient TLC is normal. A mixed ventilatory defect is characterized by the coexistence of obstruction and restriction and is defined physiologically when both FEV1/FVC and TLC are below the 5th percentiles of their relevant predicted values.  However, in this patient the FEV1/FVC and TLC are normal. 
      
      Non-specific (NS) pulmonary function pattern refers to pulmonary function test (PFT) with a low forced expiratory volume in first second (FEV1) or low forced vital capacity (FVC) or both; with normal FEV1/FVC ratio and normal total lung capacity (TLC). It is generally believed that that NS pattern may be a consequence of an obstructive disease (including asthma, chronic obstructive pulmonary disease [COPD] and bronchiectasis) or can also be seen in those with restricted expansion of the thorax or the lung as seen in Obesity or interstitial processes. [2] `,
      explanationImage: [],
      explanationLinks: [
      `<a href="https://pubmed.ncbi.nlm.nih.gov/16264058/" target="_blank"> Pellegrino R, Viegi G, Brusasco V, Crapo RO, Burgos F, Casaburi R, Coates A, van der Grinten CP, Gustafsson P, Hankinson J, Jensen R, Johnson DC, MacIntyre N, McKay R, Miller MR, Navajas D, Pedersen OF, Wanger J: Interpretative strategies for lung function tests. Eur Respir J. 2005, 26 (5): 948-968.</a>`,
      `<a href='https://pubmed.ncbi.nlm.nih.gov/18812444/' target="_blank">Hyatt RE, Cowl CT, Bjoraker JA, Scanlon PD: Conditions associated with an abnormal nonspecific pattern of pulmonary function tests. Chest. 2009, 135 (2): 419-424.</a>`
        ],
      level: 'easy',
      category: 'anatomy'
    }),

  //Q2
  Question_Answer.create({ 
      question: `A 70-year-old Caucasian male comes to the clinic with a complaint of progressive shortness of breath. He denies having similar episodes in the past. He is a retired teacher and has a history of colon cancer and coronary artery disease. His current medications include Aspirin, multivitamins, and Lisinopril. Temperature 99.8 F, blood pressure 105/ 68, respiratory rate 20, pulse 115/min. Pulse oximetry is 95% on room air. Cardiac examination reveals tachycardia and normal heart sounds. Chest X-ray results were non-significant. Which of the following is the best interpretation of the results? Laboratory results are given below:`,
      questionImage: [`public/Images/Q2/Q2 img1.png`], 
      answerOptions: [`D-Dimer test appears positive and indicates a need for further evaluation by CTA.`,`D-Dimer test is positive and indicates immediate treatment of PE.`,`D-Dimer test is positive and indicates immediate treatment of PE.`,`D-Dimer test is positive because of the history of coronary artery disease.`],
      correctAnswer:`D-Dimer test appears positive and indicates a need for further evaluation by CTA.`,
      explanation: `D-dimers are a fibrin degradation product (FDP) from fibrinolytic activity of acute thrombi that is more applicable when combined with pretest clinical probability, as per Wells Criteria for pulmonary embolism (PE). Enzyme linked immunosorbent assay (ELISA) and immunoturbidimetric D-dimer assays are highly sensitive for the diagnosis of PE.  D-dimer has a sensitivity of greater than 95% and negative likelihood ratios of 0.10 for ELISA or immunoturbidimetric assays, with a specificity of 40% and a positive likelihood ratio of 1.64.3 [1]. It is more useful in patients that have a low or intermediate pretest clinical probability but in patients with high pretest probability [2]. to clinically rule out diagnosis of PE, a cut off value of 500 ng/ml for patients with low – intermediate probability of PE. An important point to remember is that D-dimers may increase in other clinical conditions, such as infections, malignancy, and pregnancy.   

      In our patient, as per ELISA assay the D-dimer result was positive for PE but given its low specificity, indicating the D-dimer test alone can’t be used as a diagnostic test for PE.  Patients with a high D-dimer should also have a computed tomography pulmonary angiography (CTPA) or a ventilation-perfusion lung scan.  Recent research has indicated that D-dimer levels tend to increase proportional to patient age.[3] Clinicians should use an age-adjusted D-dimer cutoff (patient’s age in years × 10 mcg/L) for patients over age 50 years when evaluating for venous thromboembolism (VTE); it reduces false positives without substantially increasing false negatives. 
      
      For example: A 60-year-old patient, a value below 600ng/ml will rule out PE without any further radiological scans. In this patient, the age adjusted value of d-dimer can be calculated as, 70 x 10 = 700ng/ml. 
      `,
      explanationImage: [],
      explanationLinks: [
          `<a href="https://pubmed.ncbi.nlm.nih.gov/17155963/" target="_blank">Di Nisio M, Squizzato A, Rutjes AW, Büller HR, Zwinderman AH, Bossuyt PM.  Diagnostic accuracy of D-dimer test for exclusion of venous thromboembolism: a systematic review. J Thromb Haemost. 2007;5(2):296-304.</a>`,
          `<a href="https://pubmed.ncbi.nlm.nih.gov/16461960/" target="_blank">Le Gal G, Righini M, Roy P-M, et al. Prediction of pulmonary embolism in the emergency department: the revised Geneva score. Ann Intern Med. 2006;144(3):165-171. </a>`,
          `<a href="https://pubmed.ncbi.nlm.nih.gov/23750684/" target="_blank">Andro M, Righini M, Le Gal G. Adapting the D-dimer cutoff for thrombosis detection in elderly outpatients. Expert Rev Cardiovasc Ther. 2013;11(6):751-759. </a>`,
      ],
      level: "easy",
      category: "anatomy",
    }),


  //Q3
  Question_Answer.create({ 
      question: `3.	A 35-year-old female presents to the pulmonary clinic with frequent episodes of cough and hemoptysis for the past 6 months. She says that her symptoms have gotten worse over the past 2 weeks. She denies any fever or weight loss. She has a history of asthma that was not well controlled. Patient vitals are within normal limits. Lung auscultation reveals wheezing bilaterally. Chest X-ray done on two different occasions showed fleeting pulmonary infiltrates. Her Laboratory results reveal elevated serum IgE level (5,123 IU/mL). This clinical picture is suggestive of which of the following? `,
      questionImage: [], 
      answerOptions: [`Allergic Bronchopulmonary Aspergillosis (ABPA)`, `Acute Eosinophilic Pneumonia`, `Loffler's syndrome`, `Granulomatosis with Polyangiitis (GPA)`],
      correctAnswer:`Allergic Bronchopulmonary Aspergillosis (ABPA)`,
      explanation: `Allergic bronchopulmonary aspergillosis (ABPA) refers to the colonization of the lower respiratory tract in susceptible allergic asthmatics or cystic fibrosis patients, by the fungus Aspergillus fumigatus [1].   The fungus develops in the bronchial wall and releases antigens causing a hypersensitivity reaction resulting in tissue damage.  Patients usually present with wheezing, thick sputum (dark brown mucus plugs) along with fever and weight loss.  The Rosenberg criteria (listed below) are used to confirm diagnosis, with 8 major and 3 minor criteria [2].  The criteria can be remembered by the mnemonic ARTEPICS.  If 6 of the 8 criteria are met, then diagnosis is definite.
      A – Asthma  
      R – Radiographic fleeting pulmonary opacities  
      T – Skin test positive (type 1 reaction) for Aspergillus fumigatus  
      E – Eosinophilia  
      P – Precipitating antibodies (Immunoglobulin G [IgG]) in serum  
      I – Immunoglobulin E (IgE) in serum elevated (>1,000 IU/mL)  
      C – Central bronchiectasis  
      S – Serum-specific IgG and IgE against A. fumigates
      Corticosteroids are the treatment of choice for ABPA with the aim of controlling the underlying asthma and preventing further tissue damage.  In some cases, adding PO itraconazole can be helpful.  
      `,
      explanationImage: [],
      explanationLinks: [
          `<a href="https://pubmed.ncbi.nlm.nih.gov/19025712/" target="_blank">Agarwal R, Srinivas R, Agarwal AN, Saxena AK. Pulmonary masses in allergic bronchopulmonary aspergillosis: mechanistic explanations. Respiratory care 2008; 53:1744-8.</a>`,
          `<a href="https://pubmed.ncbi.nlm.nih.gov/848802/" target="_blank">Rosenberg M, Patterson R, Mintzer R, Cooper BJ, Roberts M, Harris KE. Clinical and immunologic criteria for the diagnosis of allergic bronchopulmonary aspergillosis. Annals of internal medicine 1977; 86:405-14</a>`,
      ],
      level: "easy",
      category: "anatomy",
    }),

    //Q4
    Question_Answer.create({ 
      question: `Which of the following is generally not a cause of acute chest syndrome in a patient with sickle cell disease?`,
      questionImage: [``], 
      answerOptions: [`M. Tuberculosis`,`Chlamydia pneumonia`,`RSV infection`, `Fat embolism`],
      correctAnswer:`M. Tuberculosis`,
      explanation: `Acute chest syndrome [ACS] occurs due to vaso-occlusion within the pulmonary vasculature of patients with sickle cell disease [SCD].  It is the most common cause of death in patients with SCD. Etiologies include infection (bacterial or viral), fat embolism, and pulmonary infarction. Chlamydia pneumonia and mycoplasma are the most identified bacterial pathogens. Viral infections like Viral (respiratory syncytial virus, parvovirus, rhinovirus) may also be a contributing cause. SCD does not seem to be a risk factor for severe TB. Pediatric patients are more likely to have an infectious cause and will therefore present with symptoms such as wheezing, cough, increased work of breathing, and fever. Adult patients with ACS are more likely to present with chest pain, pain in the arms and legs, shortness of breath, or a vaso-occlusive crisis. The risk factor for Low HbF, young age, history of asthma, and history of smoking. Acute management of ACS includes pain control, intravenous (IV) fluids, antibiotics, supplemental oxygen, and blood transfusions. More severe presentations may require treatment with simple or exchange transfusion and/or noninvasive or invasive respiratory support. Performing a red cell exchange can reduce blood viscosity as well as improve oxygenation.`,
      explanationImage: [],
      explanationLinks: [
          `<a href="https://pubmed.ncbi.nlm.nih.gov/30037443/" target="_blank">Porter M. Rapid Fire: Sickle Cell Disease. Emerg Med Clin North Am. 2018 Aug;36(3):567-576.</a>`,
          `<a href="https://pubmed.ncbi.nlm.nih.gov/28401342/" target="_blank">Droz N, et al.Tuberculosis in children with sickle cell anaemia: a retrospective study in French tertiary care centres. Eur J Pediatr. 2017 Jun;176(6):723-729.</a>`,
       ],
      level: "easy",
      category: "anatomy",
    }),

      //Q5
    Question_Answer.create({ 
      question: `A 40-year-old male comes to the ER with epigastric pain and cough. He has been having these symptoms over the past 15 days along with exertional dyspnea. He has no other significant medical problems. He has smoked one pack/day for the past 20 years. Physical examination reveals normal breath sounds bilaterally, no cervical or axillary lymphadenopathy. Blood pressure 126/79 mmHg, RR 18 breaths/min, PaO2 98% on room air, HR 78 beats/min. The right posterior mediastinum mass seen on CT scan is likely derived from which cell type?`,
      questionImage: [`public/Images/Q5/Q5 img1.png`], 
      answerOptions: [`Metastatic origin`,`Lymphoid origin`,`Neural origin`,`Germ cell origin`],
      correctAnswer:`Neural origin`,
      explanation: `A mediastinal mass is often an incidental finding on radiology images and can present in several ways.  Most mediastinal masses are asymptomatic. Patients usually present with secondary complaints due to local mass effects such as chest pain or weight loss.   In some, patient's systemic symptoms can be present due to tumors or a variety of paraneoplastic syndromes. Mediastinum can be divided into three regions, anterior, middle, and posterior mediastinum. Most common anterior mediastinal masses are thymoma and lymphomas.  In the middle, mediastinal masses are lymph node enlargement and vascular masses.  In the posterior side, masses are of neurogenic tumors and esophageal abnormalities.  A combination of clinical factors and imaging features often narrow the differential diagnosis when a mediastinal mass is detected. The above patient appears to have a neurilemmoma (or schwannoma), a benign neoplasm arising from neural tissue located in the posterior mediastinum.  The treatment is dependent on underlying etiology.  Benign lesions can be observed while malignant tumors should be removed.  In case of lymphomas, chemotherapy is the best treatment.`,
      explanationImage: [],
      explanationLinks: [
          `<a href="https://pubmed.ncbi.nlm.nih.gov/24701488/" target="_blank">AR Aroor, RS Prakasha, A Study of Clinical Characteristics of Mediastinal Mass. J Clin Diagn Res. 2014; (8)2: 77-80  </a>`,
       ],
      level: "easy",
      category: "anatomy",
    }),



      //Q6
      Question_Answer.create({ 
      question: `A 70-year-old woman comes to the clinic complaining for shortness of breath, fatigue from past few months. Patient also complain of fluctuating diplopia which gets worse by the end of the day. She has a history of Hypertension for 20 years and Lisinopril. She is a bank manager and drinks a glass of wine daily. Temperature 98.4, blood pressure 132/88, pulse 85 beats /min, respiratory rate 18 beats/ min. Pulse oximetry is 70% at room air. Physical examination is normal. On further examination, the CT scan given below showed a mass in anterior mediastinum. Which of the following test will help to confirm the diagnosis? `,
      questionImage: [`public/Images/Q6/Q6 img1.png`], 
      answerOptions: [`Anti-Jo antibodies`,`Anti-CCP antibodies`,`Antibodies against Post Acetylcholine receptors`,`Antibodies against Pre-Voltage gated Calcium channel`],
      correctAnswer:`Antibodies against Post Acetylcholine receptors`,
      explanation: `Based on the patient’s symptoms and CT scan finding, this patient can have myasthenia gravis. Myasthenia gravis is an autoimmune disease in which patients develop antibodies against acetylcholine receptors in the postsynaptic membrane. These patients present with fluctuating muscle weakness which gets worse by the end of the day as seen in this patient. To diagnose these patients, screening test such as Edrophonium test, also called as Tensilon test and Ice Pack test can be done. The confirmatory test for this condition is evaluation of acetylcholine receptor antibodies. Myasthenia gravis can be a paraneoplastic manifestation of underlying neoplasm such as thymoma which presents as anterior mediastinal mass on CT scan as seen in this patient. In these patients thymectomy is done to relieve the symptoms of the patients. Other patients can be treated with acetylcholinesterase inhibitors such as pyridostigmine along with immunotherapy. 
      Antibodies against voltage gated calcium channels are seen in Lambert Eaton syndrome which result in decreased release of acetylcholine. These patients present with diminished or absent deep tendon reflexes along with muscle weakness. Six-minute walk test can help in evaluating patient’s shortness of breath but would not help in making diagnosis in this patient. Nerve conduction test measures how fast an electrical impulse moves but won’t help in diagnosing this patient as myasthenia gravis is an autoimmune disease.`,
      explanationImage: [],
      explanationLinks: [
          `<a href="https://www.ncbi.nlm.nih.gov/books/NBK559331/" target="_blank">Beloor Suresh A, Asuncion RMD. Myasthenia Gravis. [Updated 2020 Aug 10]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2020 Jan.</a>`,
       ],
      level: "easy",
      category: "anatomy",
    }),

    

      //Q7
      Question_Answer.create({ 
          question: `The concurrent use of PDE5 inhibitors is contraindicated with which of the following agents? `,
          questionImage: [``], 
          answerOptions: [`Ambrisentan`,`Bosentan`,`Macitentan`,`Riociguat`],
          correctAnswer:`Riociguat`,
          explanation: `Pulmonary arterial hypertension (PAH) is a rare but life-threatening disease  
          characterized by vasoconstriction and remodeling of the small pulmonary arteries, which increases pulmonary vascular resistance (PVR) and leads to right heart failure and ultimately death. PAH-specific therapy aims to dilate the pulmonary vessels and inhibit vascular cell proliferation by targeting three main pathways: the nitric oxide (NO) pathway (targeted by phosphodiesterase type-5 [PDE5] inhibitors and a soluble guanylate cyclase [sGC] stimulator), the endothelin pathway (targeted by endothelin receptor antagonists) and the prostacyclin pathway (targeted by prostanoids). Although sildenafil and riociguat have different mechanisms of action, they both target the NO pathway to promote vasodilation [1]. They therefore may have additive systemic BP-lowering effects when administered, leading to an increased risk of hypotension. 
          PDE5 inhibitors are contraindicated within 24 hours [Sildenafil] (or 48 hours with tadalafil) of taking alpha-blockers, or nitrate medications such as isosorbide mononitrate or isosorbide dinitrate. Concurrent use of these medications can lead to life-threatening low blood pressure.`,
          explanationImage: [],
          explanationLinks: [
              `<a href="https://pubmed.ncbi.nlm.nih.gov/26219978/" target="_blank">Humbert M., Ghofrani H.A. The molecular targets of approved treatments for pulmonary arterial hypertension. Thorax. 2016;71(1):73–83 </a>`,
           ],
          level: "easy",
          category: "anatomy",
        }),





      //Q8
      Question_Answer.create({ 
          question: `Which of the following regarding PAH is false?`,
          questionImage: [``], 
          answerOptions: [`The disease affects men much more often than women.`,`Some patients with PAH may present with only nonspecific symptoms such as fatigue and edema.`,`RHC is required during diagnostic evaluation when pulmonary hypertension is suspected.`,`Underlying causes, as well as pulmonary capillary wedge pressure or left ventricular end-diastolic pressure, are evaluated when determining a diagnosis of PAH.`],
          correctAnswer:`The disease affects men much more often than women.`,
          explanation: `Pulmonary arterial hypertension (PAH) is characterized by pathological hemodynamic elevation in pulmonary artery pressure. Heritable PAH and Idiopathic PAH [IPAH] occur twice as frequently in females compared to males. Similarly, PAH associated with CTD is reported to occur in a female-to-male ratio of 3.8:1. In addition, women with systemic sclerosis are eight times more likely than men to suffer from PAH. Recent registries have shown that females with PAH have better survival compared to males.`,
          explanationImage: [],
          explanationLinks: [
              `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4096686/" target="_blank">Lai YC, Potoka KC, Champion HC, Pulmonary Arterial Hypertension: The Clinical Syndrome; Circ Res. 2014 Jun 20; 115(1): 115–130.</a>`,
           ],
          level: "easy",
          category: "anatomy",
        }),

   //Q9
   Question_Answer.create({ 
      question: `A 45-year-old African American woman is evaluated for a 6 month history of progressive dyspnea and she is unable to walk more than one block. She had a history of DVT and pulmonary embolism 5 years ago. Her last ER admission was 2 weeks ago and evaluated by a pulmonologist because of oxygen desaturation on ambulation.  She went to ER because of ankle swelling but does not have chest pain, cough, lightheadedness, or other localizing symptoms.  She was discharged with supplemental oxygen during exertion.  Her past medical history is of endometriosis for which she is taking birth control pills.  Her vital signs are temperature is 98.1°F, blood pressure is 120/70 mm Hg, pulse rate is 110/min and regular, and respiration rate is 22/min, PaO2 98% of 2L NC.  Her BMI is 32.  On physical examination, she is sitting comfortably in no acute distress.  The lungs are clear. Cardiac examination reveals sinus tachycardia, an increased pulmonic component of S2, and tricuspid regurgitation murmur.  Echo showed ejection fraction of 60%, tricuspid regurgitation, right ventricle systolic pressure of 65mmHg. Ankle edema is noted bilaterally.  Labs studies are normal CBC, BMP except for a B-type natriuretic peptide level of 900 pg/mL. Arterial blood gas measurement breathing ambient air shows a pH of 7.43, a PCO2 of 37 mm Hg and a PO2 of 65 mmHg. Which of the following will help to confirm the etiology of pulmonary hypertension in this patient?`,
      questionImage: [``], 
      answerOptions: [`CT without contrast`,`Right heart catheterization`,`6-minute walk test`,`Ventilation/Perfusion scan`],
      correctAnswer:`Ventilation/Perfusion scan`,
      explanation: `This patient’s presentation is suggestive of chronic thromboembolic pulmonary hypertension (CTEPH) therefore the more appropriate next step in diagnosis is a ventilation/perfusion scan and remains the screening test of choice. Patients have evidence of past DVT and PE now has pulmonary hypertension on ECHO. Given in this picture is the specimen of clots removed through embolectomy.`,
      explanationImage: [`public/Images/Q9/A9 img1.jpg`],
      explanationLinks: [
          `<a href="https://pubmed.ncbi.nlm.nih.gov/21330453/" target="_blank">Fedullo P, Kerr KM, Kim NH, Auger WR. Chronic thromboembolic pulmonary hypertension. Am J Respir Crit Care Med. 2011;183:1605-1613. </a>`,
       ],
      level: "easy",
      category: "anatomy",
    }),

   //Q10
   Question_Answer.create({ 
      question: `A 70-year-old Mexican male was evaluated in the emergency department for a urinary tract infection, hypotension, confusion and lethargy. He was started on antibiotics, was administered in the emergency department and admitted.  His vital signs on admission were temperature 101.0 °F, blood pressure is 80/55 mm Hg, pulse rate is 120/min, and respiration rate is 28/min.  His physical exam was normal, except for dry mouth, dry skin, cool extremities, and impaired mental status.  Urine output is diminished. Electrocardiogram shows normal sinus rhythm with normal T-wave and ST-segment morphology. Laboratory studies are done.  Hb 11.5 g/dl, WBC is 17,000/ µL, Creatinine is 1.0.  Sodium level is 110, Potassium 4.5, serum bicarbonate is 24mEq/L, serum lactate 6.0 mmol/L. He has past medical history of COPD, diabetes mellitus. The most effective initial treatment currently is?`,
      questionImage: [``], 
      answerOptions: [`Give IV steroids`,`Arrange for blood transfusion`,`Start IV fluids`,`IV sodium bicarbonate`],
      correctAnswer:`Start IV fluids`,
      explanation: `Sepsis is a medical emergency that describes the body’s systemic immunological response to an infectious process that can lead to end-stage organ dysfunction and death. [1] This patient is septic and should receive intravenous fluid resuscitation (commonly targeted for 30 ml/ kg). Further fluid resuscitation is best determined by an individualized assessment of clinical with ideally physiologic variables (such as passive leg raise or stroke volume variation). Crystalloid solutions are the preferred solution. There have been recent studies investigating whether there is a benefit in renal function and overall outcomes with balanced solutions such as Lactated Ringers (due to less chloride and acidity) rather than 0.9% normal saline. The most recent study does not reveal a clear benefit, but this is not definitive for all subgroups. [2] 

      Using lactate levels and capillary refill time to help guide resuscitation is recommended. The goal is to maintain adequate tissue perfusion with intravenous fluid bolus administration. The defining features of inadequate tissue perfusion include tachycardia, tachypnea, oliguria, acidosis, delirium, cold extremities. In sepsis, the first 6 hours of resuscitation are critical. Obtaining lactate level and blood culture before treatment. 
      
      Early administration of antibiotics is critical and typically should be given immediately on suspicion of severe sepsis and shock. There are no randomized control trials but there is a clear association with delay in antibiotic administration and increased mortality. Other important aspects of therapy include adequate oxygen administration as well as blood transfusion with transfusions following a restrictive strategy. Vasopressor therapy with norepinephrine as the initial choice to achieve a goal MAP>65 is standard if fluid resuscitation alone is not successful.
       
      Earlier iterations of the sepsis guidelines included Early Goal Directed Therapy (EGDT) which along with early fluids and antibiotics also included therapy based on central venous oxygen saturation and central venous pressure. It also emphasized more aggressive use of blood transfusions and dobutamine. However, multiple randomized clinical trials have shown the lack of mortality benefit beyond usual care (while emphasizing rapid antibiotics and fluid administration) and these other treatments are not necessary for the typical septic shock patient. [4] 
      `,
      explanationImage: [],
      explanationLinks: [
          `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6429642/" target="_blank">Gyawali B,Ramakrishna K, Dhamoon AS, Sepsis: The Evolution in definition, pathophysiology and management. Sage Open Med 2019, 7:1-13 </a>`,
          `<a href="https://pubmed.ncbi.nlm.nih.gov/35041780/" target="_blank">Finfer, S et al. Balanced Multielectrolyte Solution versus Saline in Critically Ill Adults. NEJM. 2022 </a>`,
          `<a href="https://pubmed.ncbi.nlm.nih.gov/34599691/" target="_blank">Evans, Laura et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Crit Care Med. 2021 </a>`,
          `<a href="https://pubmed.ncbi.nlm.nih.gov/24635773/" target="_blank">ProCESS Investigators. A randomized trial of protocol-based care for early septic shock. NEJM. 201</a>`,
       ],
      level: "easy",
      category: "anatomy",
    }),

   //Q11
   Question_Answer.create({ 
      question: `A 25-year-old woman presents to the Emergency Department (ED) with acute onset of dyspnea, wheezing, and progressive respiratory distress. She has a history of severe persistent asthma with three previous admissions to the intensive care unit, one of which required intubation. Her medications are a high-dose inhaled corticosteroid and long-acting beta agonist (ICS/LABA) only. Vital signs: Temperature 98.6 °F, blood pressure 143/100 mm Hg, pulse rate 115/min, respiration rate is 28/min. On physical examination, she appears anxious and is in marked distress. Lung auscultation reveals very faint wheezing, and the Cardiac exam showed a rapid and regular rhythm with no murmurs. ABG showed; pH 7.10, PCO2 70 mm Hg, and PO2 of 55 mm Hg. The decision was made to intubate, and the patient was intubated in the ED and placed on mechanical ventilation. Ventilator with settings: assist control, respiratory rate 14 bpm, tidal volume 500mL, FiO2 0.5. Chest radiograph shows the endotracheal tube is in good position and the lungs are hyperinflated without any infiltrates. When setting up the ventilator what is the most important feature for this patient?`,
      questionImage: [``], 
      answerOptions: [`Increased expiratory time`,`Increased inspiratory time`,`Decreased minute ventilation`,`Decrease inspiratory flow`],
      correctAnswer:`Increased expiratory time`,
      explanation: `This patient has status asthmaticus caused by severe airflow limitation.  Severe obstruction in patients may result in breath stacking and end positive end-expiratory pressure (auto-PEEP) because of insufficient time to complete preceding breath. Auto PEEP can result in decreased venous return, hypotension, and barotraumas.  The goal of managing ventilation is to allow adequate time for exhalation which can be achieved by increasing expiratory time, decreasing the tidal volume and respiration rate, increasing inspiratory flow rates, or using sedative.  An increased expiration duration allows time for optimal exhalation and avoiding air trapping.  In asthma patient, there are few criteria for intubation such as, physical exhaustion, altered sensorium, such as lethargy or agitation, pH < 7.2, carbon dioxide pressure increasing by more than 5 mm Hg/h or greater than 55 to 70 mm Hg or respiratory rate of greater than 40 breaths/minute, silent chest despite respiratory effort. Shortening of inspiration with a square wave pattern and an inspiratory flow rate of 60 L/min allows greater time for exhalation in each respiratory cycle and might help control hyperinflation.`,
      explanationImage: [],
      explanationLinks: [
          `<a href="https://www.atsjournals.org/doi/full/10.1513/pats.p09st4" target="_blank">Barry Brenner, Thomas Corbridge, and Antoine Kazzi "Intubation and Mechanical Ventilation of the Asthmatic Patient in Respiratory Failure", Proceedings of the American Thoracic Society, Vol. 6, No. 4 (2009), pp. 371-379. </a>`,
          `<a href=https://pubmed.ncbi.nlm.nih.gov/32222313/" target="_blank">Hall JB, Wood LDH. Management of the critically ill asthmatic patient. Med Clin North Am 1990; 74:779-796 </a>`,
          `<a href="https://www.thoracic.org/statements/resources/allergy-asthma/asthma.pdf" target="_blank">Kohn MS. Intubation of the asthma patient. Clin Allergy Immunol 1999; 13:419–428. </a>`,
       ],
      level: "easy",
      category: "anatomy",
    }),

   //Q12
   Question_Answer.create({ 
      question: `A 62-year-old patient comes to the ER for altered mental status. He has shortness of breath, cough, and diarrhea from the past 3-4 days. Patient went to Hawaii a week ago for summer vacation. He works as an accountant. He has diabetes mellitus from 15 years and takes metformin. He has smoked 15 packs per day for 25 years. Temperature 102.1 F, pulse 72 beats/min, respiratory rate 18 bpm, blood pressure 128/85. Pulse oximetry 92% at room air. Cardiac examination showed bradycardia. Laboratory findings: Na - 126 mmol/L, K 4.5mmol/L, CL- 105 mmol/L, Fasting glucose - 112 mg/dl, AST- 98, ALT – 95. Urinalysis showed hematuria and proteinuria. Chest x ray showed bilateral diffuse interstitial infiltrates. On further examination sputum analysis revealed many neutrophils but no few microorganisms. Which of the following is responsible for this patient’s condition?`,
      questionImage: [``], 
      answerOptions: [`Mycoplasma pneumonia`,`Legionella pneumonia`,`Coccidiomycosis`,`Blastomycosis`],
      correctAnswer:`Legionella pneumonia`,
      explanation: `This patient’s travel history to Hawaii and his clinical findings strongly point towards legionella pneumonia as it is spread via contaminated water. Patients with legionella pneumonia present with bradycardia despite high fever, altered mental status, diarrhea as seen in this patient. [1] This bacteria can cause hepatic, renal dysfunction and can also increase the activity of Antidiuretic hormone causing hyponatremia. The confirmatory test is legionella urine antigen test as the organism is not seen via sputum examination. These patients are treated with fluoroquinolones or macrolides. There are many risk factors which include age of the patient above 50 years, current or former smoker, people with a chronic lung disease such as COPD, emphysema, immunocompromised patients. [2] 

      Mycoplasma pneumonia is transmitted through respiratory droplets. Mostly it affects the younger population. Patients are asymptomatic or can present with flu-like symptoms. Chest x-ray can be much worse than the patient’s symptoms. These patients are treated with macrolides.  
      
      Coccidiomycosis is transmitted through spores and is commonly found in Arizona, California. The clinical findings vary from nonspecific symptoms such as fever, fatigue, dry cough to erythema multiforme, erythema nodosum, and arthralgia. Depending on the severity of the patient, oral itraconazole or IV amphotericin can be given. 
      
      Blastomycosis is transmitted through airborne spores in contaminated soil. It is common in Wisconsin, Ohio River, Mississippi. The clinical finding of the patients varies from pneumonia to wart like skin lesions. It also affects bones, genitourinary system, CNS. On sputum examination, large broad-based budding organisms can be seen which is characteristic of blastomycosis. Depending on the severity of the patient, oral itraconazole or IV amphotericin can be given  
         
      Aspergillosis has three distinct pulmonary presentations. It can result in Allergic bronchopulmonary aspergillosis (ABPA), Aspergilloma or in a 
      immunocompromised host it can result in Invasive Aspergillosis. Patients with ABPA are treated with Itraconazole and steroids. Aspergillomas can be treated with surgical rejection of the fungal ball. In case of invasive aspergillosis, the drug of choice is voriconazole. 
      `,
      explanationImage: [],
      explanationLinks: [
          `<a href="https://pubmed.ncbi.nlm.nih.gov/17980914/" target="_blank">Diederen BM, Legionella spp and Legionnaires’ disease. J Infect 2008; 56:1-12 </a>`,
          `<a href="https://pubmed.ncbi.nlm.nih.gov/28696077/" target="_blank">Sivagnanam S. Legionnaires’ disease in transplant recipients: A 15-year retrospective study in a tertiary referral center. Transpl Infect Dis, 2017; 19(5) </a>`,
       ],
      level: "easy",
      category: "anatomy",
    }),

   //Q13
   Question_Answer.create({ 
      question: `Which of the following treatments for Eosinophilic Granulomatous Polyangiitis (EGPA) has been shown to demonstrate improvements in remission, oral corticosteroid dose reductions and/or remaining free of EGPA relapse? `,
      questionImage: [``], 
      answerOptions: [`Azathioprine`,`Cyclophosphamide`,`Mepolizumab`,`Methotrexate`],
      correctAnswer:`Mepolizumab`,
      explanation: `Mepolizumab: It is a humanized monoclonal antibody to IL-5. This drug is approved by FDA for use in patients with age above 12 years, who have severe asthma and EGPA. A subcutaneous dose of 300 mg every four weeks is recommended. Studies have shown that this drug has a glucocorticoid sparing effect on patients [1]. It reduces exacerbations in patients with severe asthma.  It also helps improve outcomes in patients with severe asthma and eosinophilia [2].`,
      explanationImage: [],
      explanationLinks: [
          `<a href="https://pubmed.ncbi.nlm.nih.gov/25199060/" target="_blank">Bel EH, Wenzel SE, Thompson PJ, Oral glucocorticoid-sparing effect of mepolizumab in eosinophilic asthma. N Engl J Med 2014; 371(13):1189-97 </a>`,
          `<a href="https://pubmed.ncbi.nlm.nih.gov/25199059/" target="_blank">HG Ortega, Mepolizumab treatment in patients with severe eosinophilic asthma. N Engl J Med 2014, 371:1198-1207 </a>`,
       ],
      level: "easy",
      category: "anatomy",
    }),

   //Q14
   Question_Answer.create({ 
      question: `Which of the following is most helpful in distinguishing Eosinophilic granulomatosis polyangiitis (EGPA) from chronic eosinophilic pneumonia and hypereosinophilic syndrome?`,
      questionImage: [``], 
      answerOptions: [`History of asthma`,`Cardiac involvement`,`c-ANCA`,`Pulmonary infiltrates`],
      correctAnswer:`c-ANCA`,
      explanation: `C-ANCA: These antibodies are against neutrophil cytoplasmic antigens and are associated with EGPA. Studies have shown that these antibodies are found in more than 50% of EGPA patients and this percentage is more in patients with active or undetected disease [1]. Also, the clinical symptoms vary according to presence and absence of these antibodies [2]. For example, ANCA positive patients are more likely to have glomerulonephritis, alveolar hemorrhage and neurological disease as compared to ANCA negative patients [2].`,
      explanationImage: [],
      explanationLinks: [
          `<a href="https://pubmed.ncbi.nlm.nih.gov/12967693/" target="_blank">Keogh KA, Churg-Strauss syndrome: clinical presentation, antineutrophil cytoplasmic antibodies, and leukotriene receptor antagonists. Am J Med 2003, 115(4): 284-90 </a>`,
          `<a href="https://pubmed.ncbi.nlm.nih.gov/16142760/" target="_blank">Sinico RA. Prevalence and clinical significance of antineurophil cytoplasmic antibodies in Churg-Strauss syndrome. Arthritis Rheum 2005; 52(9): 2926-35</a>`,
       ],
      level: "easy",
      category: "anatomy",
    }),

   //Q15
   Question_Answer.create({ 
      question: `A 75-year-old man is evaluated during a routine examination. Medical history is significant for hypertension, asthma, COPD, diabetes mellitus and multiple myeloma.  He has a history of smoking but quit 15 years ago. His medications are lisinopril, metformin, aspirin, and an albuterol inhaler that he uses as needed. He has no allergies. Vital signs are normal. The results of the physical examination are normal.  He recently heard a television commercial about getting another pneumococcal  vaccination (PCV20) and would like some more information on it.  Based on the current guidelines regarding use of pneumococcal vaccine, which of the following statements is true?`,
      questionImage: [``], 
      answerOptions: [`Based on the guidelines, he can get vaccinated with PPSV 23 alone, and then repeat PCV20 at 6-12 months later.`,`Based on the guidelines, he needs another dose of PPSV 23 before he can get vaccinated with PCV15.`,`Based on the guidelines, he does not qualify for any vaccination currently.`,`Based on the guidelines, he can receive one dose of PCV20 only.`],
      correctAnswer:`Based on the guidelines, he can get vaccinated with PPSV 23 alone, and then repeat PCV20 at 6-12 months later.`,
      explanation: `Based on the guidelines, published by Advisory committee for Immunization Practices (ACIP)

      1.	 There are many pneumococcal vaccines available, mainly PCV20: 20-valent pneumococcal conjugate vaccine; PCV15: 15-valent pneumococcal conjugate vaccine; PPSV23: 23-valent pneumococcal polysaccharide vaccine. Pneumococcal vaccination is indicated for adults with risk factors for acquisition of or severe adverse outcomes from pneumococcal disease. These adults should receive either PCV20 alone or PCV15 followed by PPSV23. When administering the PCV15 and PPSV23 combination, PCV15 should be given first when possible. The recommended intervals between the two vaccines may vary based on indication
      `,
      explanationImage: [`public/Images/Q15/A15 img1.png`],
      explanationLinks: [],
      level: "easy",
      category: "anatomy",
    }),

   //Q16
   Question_Answer.create({ 
      question: `86-year-old man was brought to the emergency department by his son due to behavioral changes over the past two days. The son states that the patient has become increasingly agitated since onset of symptoms. On examination, the patient is unable to recognize his son and is unaware of the date or place. Over the next two hours the patient becomes more agitated and abusive. Which of the following medications is the agent of choice in selected older people with delirium?`,
      questionImage: [``], 
      answerOptions: [`Olanzapine`,`Risperidone`,`Trazodone`,`Haloperidol`],
      correctAnswer:`Haloperidol`,
      explanation: `Neuroleptics are generally the preferred agents for treatment of acute delirium and agitation. Haloperidol has been the most widely used neuroleptic. The effectiveness of haloperidol has been established by randomized, controlled clinical trials. Some atypical antipsychotics, such as risperidone, olanzapine and quetiapine have been used clinically to treat agitation in patients with delirium, with controlled trials showing efficacy at least comparable to haloperidol. However, no data are available to demonstrate any verifiable advantage of one antipsychotic over another.`,
      explanationImage: [`public/Images/Q16/A16 img1.png`],
      explanationLinks: [
          `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3065676/" target="_blank">Fong T.G et al. Delirium in elderly adults: diagnosis, prevention and treatment. Nat Rev Neurol. 2009 Apr; 5(4): 210–220. </a>`,
       ],
      level: "easy",
      category: "anatomy",
    }),

     //Q17
     Question_Answer.create({ 
      question: `The most important predictor of chronic restrictive lung disease in sickle cell disease is:`,
      questionImage: [``], 
      answerOptions: [`Blood hemoglobin level`,`Number of episodes of acute chest syndrome`,`History of cigarette smoking`,`Hemoglobin SC genotype`],
      correctAnswer:`Number of episodes of acute chest syndrome`,
      explanation: `The leading cause of mortality in adults with sickle cell anemia is acute lung disease particularly pulmonary hypertension and pulmonary fibrosis.  On spirometry, pulmonary fibrosis is associated with restrictive lung diseases. Recurrent acute chest syndrome, infections, vascular infarction, and extrapulmonary restriction can lead to long standing chronic inflammation of small airways.  

      In some incidents, patients with ACS can have focal changes in the body thorax indicating bone infarction. There has been some correlation of thoracic infarction and a presence of pulmonary infiltrate. Incentive spirometry can be used to prevent these complications and relieve pain.  
       
      All the other causes are not important predictors of chronic lung disease in sickle cell disease patients.  
      `,
      explanationImage: [],
      explanationLinks: [
          `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4075318/" target="_blank">Shilpa Jain, Unraveling restrictive chronic lung disease in sickle cell disease Int J Tuberc Lung Dis. 2013 Sep; 17(9): 1123–1124.</a>`,
          `<a href="https://pubmed.ncbi.nlm.nih.gov/7637747/" target="_blank">Bellet P. Incentive Spirometry to Prevent Acute Pulmonary Complications in Sickle cell disease. NEJM 1995; 333:11, 669- 703</a>`,
       ],
      level: "easy",
      category: "anatomy",
    }),

   //Q18
   Question_Answer.create({ 
      question: `A 21-year-old nurse presents to the pulmonary office for further management of asthma. She is on inhaled steroids and LABA but since then she hasn't improved.  Her past medical history is significant for allergic rhinitis. Her Physical Examination revealed a healthy, awake and alert 21-year female.  No nasal polyps or nasal deformities were noted.  Labs results included normal complete blood count, IgE 30 IU/ml (nl), was also done.  Based on the spirometry flow loop provided, what is the next step?`,
      questionImage: [`public/Images/Q18/Q18 img1.png`], 
      answerOptions: [`Advise her to quit heavy exercise.`,`Try a short course of oral steroids.`,`Refer to speech therapist for breathing exercises`,`Discontinue albuterol`],
      correctAnswer:`Refer to speech therapist for breathing exercises`,
      explanation: `Vocal cord dysfunction (VCD) involves inappropriate (paradoxical adduction) of the vocal cord that produces partial airway obstruction, especially during inspiration. It is condition more predominant in females than male and occurring in 20 to 40 years of age.  Symptoms include  wheezing, cough, tightness in the throat, hoarseness and voice change, inspiratory difficulty, choking sensation and stridor.  VCD is often misdiagnosed as asthma exacerbation because of the wheezing and respiratory distress associated with it. Thus, a careful history is needed for a clear diagnosis.   The vocal cords abduction, or opening is controlled by the posterior cricoarytenoid muscle and adduction (closing) is via contraction of the lateral cricoarytenoid muscle. These muscles are innervated by the recurrent laryngeal nerve.  In the normal respiratory cycle, vocal cords partially abduct with inhalation and partially adduct with exhalation.  VCD is believed to be the result of laryngeal hyperresponsiveness that is prompted by irritant and non-irritants triggers that activate sensory receptors in larynx and trachea.  VCD is often diagnosed only after other potential conditions have been excluded and patients had failure to therapy.  Pulmonary function testing with a flow-volume loop reveals flattened inspiratory loop that indicates decreased airflow into the lungs (as seen in the flow loop provided).  The most effective diagnostic strategy is to confirm VCD on direct laryngoscopic visualization during a symptomatic episode.  While the anterior cord appears normal, the posterior cords will show “glottis chink”. [1]   Patients with VCD and in acute distress should be instructed with simple breathing guidance.  They should be instructed to have rapid and shallow breaths.  In other cases, use of a helium and oxygen mixture (heliox) is also effective.  For long term management strategies, treatment for symptom triggers and speech therapy along with patient education are effective parts of the treatment plan.`,
      explanationImage: [`public/Images/Q18/A18 img1.png`,`public/Images/Q18/A18 img2.png`],
      explanationLinks: [
          `<a href="https://pubmed.ncbi.nlm.nih.gov/21205712/" target="_blank">Kenn K, Balkissoon R. Vocal cord dysfunction: what do we know? The European respiratory journal 2011;37:194-200.</a>`,
       ],
      level: "easy",
      category: "anatomy",
    }),

   //Q19
   Question_Answer.create({ 
      question: `A 44-year-old female, a smoker, has had an 8-month history of progressive dyspnea, cough, chest tightness and joint pain. She has worked as a hairstylist in a hair salon since age 20.  Her vital signs are stable and a physical exam reveals regular sinus rhythm and fine bibasilar crackles.  No rashes, clubbing, cyanosis, or edema is present.  A high-resolution chest CT confirmed b/l ground glass opacities without significant adenopathy or pleural fluid [IMAGE BELOW].  All labs, CBC, LFTs, renal functions are within normal.  The ANA titer is elevated at 1:360 and Rheumatoid factor is also minimally elevated at 1:50. On PFTs, VC is 65% of predicted, FEV1 is 59% of predicted, total lung capacity is 71% of predicted, residual volume is 72% of predicted, and DLCO is 60% of predicted. What is the initial treatment that you will consider in this patient?`,
      questionImage: [`public/Images/Q19/Q19 img1.png`,`public/Images/Q19/Q19 img2.png`], 
      answerOptions: [`Oral Prednisone`,`Cellcept`,`Azathioprine`,`Methotrexate`],
      correctAnswer:`Oral Prednisone`,
      explanation: `The clinical presentation and radiographic finding for above patient indicate a pattern consistent with Interstitial pulmonary fibrosis, particularly with a nonspecific interstitial pneumonia (NSIP).  Many cases occur in the context of an underlying connective tissue disease or drug‐induced interstitial lung disease (flecainide, nitrofurantoin).  Patients present with a dry cough, shortness of breath, clubbing.  Patient’s pulmonary function testing (PFTs) are projected to demonstrate a restrictive ventilatory defect with decrease in gas transfer.  While PFTs are not essential for making the diagnosis, continued monitoring of FVC and DLCO is helpful to assess progression of disease and response to therapy and prognosis.  The most common HRCT abnormality in NSIP is bilateral ground-glass opacity with lower lobe predilection and subpleural sparing that is helping in distinguishing NSIP from UIP.  Another feature distinguishing NSIP from UIP is its responsiveness to steroids.  In more severe disease or inadequate response to steroids, azathioprine, cyclophosphamide, and cyclosporine are used.   However, Methotrexate is avoided due to pulmonary toxicity.  Patients unresponsive to medications should be considered for lung transplant.`,
      explanationImage: [],
      explanationLinks: [
          `<a href="https://pubmed.ncbi.nlm.nih.gov/24032382/" target="_blank">Travis WD, Costabel U, Hansell DM, et al. An official American Thoracic Society/European Respiratory Society statement: Update of the international multidisciplinary classification of the idiopathic interstitial pneumonias. American journal of respiratory and critical care medicine 2013;188:733-48.</a>`,
          `<a href="https://pubmed.ncbi.nlm.nih.gov/9769293/" target="_blank">Cottin V, Donsbeck AV, Revel D, Loire R, Cordier JF. Nonspecific interstitial pneumonia. Individualization of a clinicopathologic entity in a series of 12 patients. American journal of respiratory and critical care medicine 1998;158:1286-93. </a>`,
       ],
      level: "easy",
      category: "anatomy",
    }),

   //Q20
   Question_Answer.create({ 
      question: `A 25 years G1P0 woman sent by her obstetrician to a pulmonary clinic because of multiple cough spells over a period of 6 weeks.  The cough is persistently getting worse with nocturnal paroxysm and feels “suffocated”.  She initially reported occasional wheezing and chest tightness.  Thus, she was treated for asthma exacerbation but her cough didn’t improve with bronchodilator therapy.  On examination she had an oral temperature of 37°C and the oxygen saturation was 96% on room air, blood pressure was 150/78 mmHg, pulse 110 beats/mins.  Physical exam revealed slight pharyngeal hyperemia, and lungs were clear except for intermittent rhonchi.  She denies any travel history overseas or exposure to chemicals.  She is 8 weeks pregnant and unsure about her immunization status as a child.  Based on this information, which of the following lab tests has the highest specificity for a diagnosis of Bordetella pertussis?`,
      questionImage: [``], 
      answerOptions: [`PCR assay`,`Nasopharyngeal swab for culture`,`ELISA test for IgG antibody`,`Sputum Gram stain`],
      correctAnswer:`ELISA test for IgG antibody`,
      explanation: `Bordetella pertussis is an acute respiratory illness that is common in children and remains endemic in developing nations.  In children, it presents with paroxysms of cough, an inspiratory whooping with post-tussive vomiting.   In children it is associated with lymphocytosis, however that can be absent in adults and teenagers.  Unlike children, the infection is not as severe in older individuals.   The diagnostic test for Pertussis depends on duration of cough. [1]  
      ●	Sputum Culture is usually positive for 0-2 weeks. Our patient was positive for 6 weeks so it's unlikely to be helpful
      ●	PCR assay is only sensitive between 0-4 weeks 
      ●	ELISA test for IgG antibody between 2-8 weeks. 
      ●	Sputum gram stain is not helpful in this infection. 
      Pregnant women are now recommended to receive vaccines during the third trimester of each pregnancy, irrespective of the patient's history of receiving any vaccine before.  Though the vaccine is safe to administer at any time during pregnancy, the optimal time would be in the 3rd trimester, and it can provide passive immunity to fetus.  Because the antibody levels will not stay high enough to provide protection for future pregnancies, women should get a vaccine for every pregnancy.  Women, who have not received any vaccine during pregnancy, should receive it immediately after delivery.  The vaccine is safe during breastfeeding [2].  Women with incomplete or unknown history of vaccination, should receive 3 vaccinations at intervals of 0, 4 week and 6 through 12 months.  If they need a booster, Tdap should be replaced for Td to have a maximal effect for unborn fetus.  
      `,
      explanationImage: [],
      explanationLinks: [
          `<a href="https://pubmed.ncbi.nlm.nih.gov/25693017/" target="_blank">Wessels MR, Brigham KS, DeMaria A, Jr. Case records of the Massachusetts General Hospital. Case 6-2015. A 16-year-old boy with coughing spells. The New England journal of medicine 2015;372:765-73.</a>`,
          `<a href="https://pubmed.ncbi.nlm.nih.gov/23425962/" target="_blank">Centers for Disease C, Prevention. Updated recommendations for use of tetanus toxoid, reduced diphtheria toxoid, and acellular pertussis vaccine (Tdap) in pregnant women--Advisory Committee on Immunization Practices (ACIP), 2012. MMWR Morbidity and mortality weekly report 2013;62:131-5.</a>`,
       ],
      level: "easy",
      category: "anatomy",
    }),

  ])

  console.log(`seeded ${users.length} users, and ${Question.length} question(s)`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed












    //   //Qx
    //   Question_Answer.create({ 
    //     question: ``,
    //     questionImage: [``], 
    //     answerOptions: [``,``,``,``],
    //     correctAnswer:``,
    //     explanation: ``,
    //     explanationImage: [],
    //     explanationLinks: [
    //         `<a href="" target="_blank"></a>`,
    //      ],
    //     level: "easy",
    //     category: "anatomy",
    //   }),