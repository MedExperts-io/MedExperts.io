"use strict";

const {
  db,
  models: { User, Question_Answer, User_Question },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({
      password: "123",
      email: "cody@lol.com",
      status: true,
      isAdmin: false,
      firstName: "cody",
      lastName: "pug",
      school: "harvard med",
      expertise: "Student",
    }),
    User.create({
      email: "123@123.com",
      status: true,
      password: "123",
    }),
    User.create({
      password: "123",
      status: true,
      email: "124@143.com",
    }),
    User.create({
      password: "123",
      status: true,
      email: "233@333.com",
    }),
    User.create({
      status: true,
      email: "1233@1233.com",
    }),
    User.create({
      password: "123",
      status: true,
      email: "1223@1213.com",
    }),
    User.create({
      password: "123",
      status: true,
      email: "121233@121233.com",
    }),
    User.create({
      password: "123",
      status: true,
      email: "11223@12332.com",
    }),
    User.create({
      password: "123",
      status: true,
      email: "11223wq@12332wq.com",
    }),
    User.create({
      password: "456",
      status: true,
      email: "admin@lol.com",
      isAdmin: true,
      firstName: "jane",
      lastName: "doe",
    }),
  ]);

  const Question = await Promise.all([
    //Q1
    Question_Answer.create({
      question:
        "A 50-year-old male comes to the clinic for evaluation for progressive shortness of breath. PFT of the patient suggests which of the following? Pulmonary function tests are provided below: ",
      questionImage: [
        "https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q1/Q1+img1.png",
        "https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q1/Q1img2.png",
      ],
      answerOptions: [
        "Obstructive Lung Disease",
        "Restrictive Lung Disease",
        "Nonspecific Pattern",
        "Mixed Ventilatory Defect",
      ],
      correctAnswer: "Nonspecific Pattern",
      explanation: `An obstructive ventilatory defect is a disproportionate reduction in maximal airflow from the lung in relation to the maximal volume (i.e. vital capacity, VC) that can be displaced from the lung [1]. It is defined by a reduced Forced Expiratory Volume in 1 second (FEV1)/FVC ratio below the 5th percentile of the predicted value as per ATS/ERS task force [1] or less than 0.70.   In this patient FEV1/FVC is normal.

      A restrictive ventilatory defect is characterized by a reduction in TLC below the 5th percentile of the predicted value, and a normal FEV1/FVC. In this patient TLC is normal. A mixed ventilatory defect is characterized by the coexistence of obstruction and restriction and is defined physiologically when both FEV1/FVC and TLC are below the 5th percentiles of their relevant predicted values.  However, in this patient the FEV1/FVC and TLC are normal.

      Non-specific (NS) pulmonary function pattern refers to pulmonary function test (PFT) with a low forced expiratory volume in first second (FEV1) or low forced vital capacity (FVC) or both; with normal FEV1/FVC ratio and normal total lung capacity (TLC). It is generally believed that that NS pattern may be a consequence of an obstructive disease (including asthma, chronic obstructive pulmonary disease [COPD] and bronchiectasis) or can also be seen in those with restricted expansion of the thorax or the lung as seen in Obesity or interstitial processes. [2] `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/16264058/" target="_blank"> Pellegrino R, Viegi G, Brusasco V, Crapo RO, Burgos F, Casaburi R, Coates A, van der Grinten CP, Gustafsson P, Hankinson J, Jensen R, Johnson DC, MacIntyre N, McKay R, Miller MR, Navajas D, Pedersen OF, Wanger J: Interpretative strategies for lung function tests. Eur Respir J. 2005, 26 (5): 948-968.</a>`,
        `<a href='https://pubmed.ncbi.nlm.nih.gov/18812444/' target="_blank">Hyatt RE, Cowl CT, Bjoraker JA, Scanlon PD: Conditions associated with an abnormal nonspecific pattern of pulmonary function tests. Chest. 2009, 135 (2): 419-424.</a>`,
      ],
      level: "Moderate",
      category: "Pulmonary Function Testing",
    }),

    //Q2
    Question_Answer.create({
      question: `A 70-year-old Caucasian male comes to the clinic with a complaint of progressive shortness of breath. He denies having similar episodes in the past. He is a retired teacher and has a history of colon cancer and coronary artery disease. His current medications include Aspirin, multivitamins, and Lisinopril. Temperature 99.8 F, blood pressure 105/ 68, respiratory rate 20, pulse 115/min. Pulse oximetry is 95% on room air. Cardiac examination reveals tachycardia and normal heart sounds. Chest X-ray results were non-significant. Which of the following is the best interpretation of the results? Laboratory results are given below:`,
      questionImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q2/Q2+img1.png`,
      ],
      answerOptions: [
        `D-Dimer test appears positive and indicates a need for further evaluation by CTA.`,
        `D-Dimer test is positive and indicates immediate treatment of PE.`,
        `D-Dimer test value is below the age adjusted cut-off thus ruling out PE`,
        `D-Dimer test is positive because of the history of coronary artery disease.`,
      ],
      correctAnswer: `D-Dimer test appears positive and indicates a need for further evaluation by CTA.`,
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
      level: "Moderate",
      category: "Pulmonary Vascular Disease",
    }),

    //Q3
    Question_Answer.create({
      question: `A 35-year-old female presents to the pulmonary clinic with frequent episodes of cough and hemoptysis for the past 6 months. She says that her symptoms have gotten worse over the past 2 weeks. She denies any fever or weight loss. She has a history of asthma that was not well controlled. Patient vitals are within normal limits. Lung auscultation reveals wheezing bilaterally. Chest X-ray done on two different occasions showed fleeting pulmonary infiltrates. Her Laboratory results reveal elevated serum IgE level (5,123 IU/mL). This clinical picture is suggestive of which of the following? `,
      questionImage: [],
      answerOptions: [
        `Allergic Bronchopulmonary Aspergillosis (ABPA)`,
        `Acute Eosinophilic Pneumonia`,
        `Loffler's syndrome`,
        `Granulomatosis with Polyangiitis (GPA)`,
      ],
      correctAnswer: `Allergic Bronchopulmonary Aspergillosis (ABPA)`,
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
      level: "Moderate",
      category: "Bronchiectasis",
    }),

    //Q4
    Question_Answer.create({
      question: `Which of the following is generally not a cause of acute chest syndrome in a patient with sickle cell disease?`,
      questionImage: [],
      answerOptions: [
        `M. Tuberculosis`,
        `Chlamydia pneumonia`,
        `RSV infection`,
        `Fat embolism`,
      ],
      correctAnswer: `M. Tuberculosis`,
      explanation: `Acute chest syndrome [ACS] occurs due to vaso-occlusion within the pulmonary vasculature of patients with sickle cell disease [SCD].  It is the most common cause of death in patients with SCD. Etiologies include infection (bacterial or viral), fat embolism, and pulmonary infarction. Chlamydia pneumonia and mycoplasma are the most identified bacterial pathogens. Viral infections like Viral (respiratory syncytial virus, parvovirus, rhinovirus) may also be a contributing cause. SCD does not seem to be a risk factor for severe TB. Pediatric patients are more likely to have an infectious cause and will therefore present with symptoms such as wheezing, cough, increased work of breathing, and fever. Adult patients with ACS are more likely to present with chest pain, pain in the arms and legs, shortness of breath, or a vaso-occlusive crisis. The risk factor for Low HbF, young age, history of asthma, and history of smoking. Acute management of ACS includes pain control, intravenous (IV) fluids, antibiotics, supplemental oxygen, and blood transfusions. More severe presentations may require treatment with simple or exchange transfusion and/or noninvasive or invasive respiratory support. Performing a red cell exchange can reduce blood viscosity as well as improve oxygenation.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/30037443/" target="_blank">Porter M. Rapid Fire: Sickle Cell Disease. Emerg Med Clin North Am. 2018 Aug;36(3):567-576.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/28401342/" target="_blank">Droz N, et al.Tuberculosis in children with sickle cell anaemia: a retrospective study in French tertiary care centres. Eur J Pediatr. 2017 Jun;176(6):723-729.</a>`,
      ],
      level: "Easy",
      category: "Infection",
    }),

    //Q5
    Question_Answer.create({
      question: `A 40-year-old male comes to the ER with epigastric pain and cough. He has been having these symptoms over the past 15 days along with exertional dyspnea. He has no other significant medical problems. He has smoked one pack/day for the past 20 years. Physical examination reveals normal breath sounds bilaterally, no cervical or axillary lymphadenopathy. Blood pressure 126/79 mmHg, RR 18 breaths/min, PaO2 98% on room air, HR 78 beats/min. The right posterior mediastinum mass seen on CT scan is likely derived from which cell type?`,
      questionImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q5/Q5+img1.png`,
      ],
      answerOptions: [
        `Metastatic origin`,
        `Lymphoid origin`,
        `Neural origin`,
        `Germ cell origin`,
      ],
      correctAnswer: `Neural origin`,
      explanation: `A mediastinal mass is often an incidental finding on radiology images and can present in several ways.  Most mediastinal masses are asymptomatic. Patients usually present with secondary complaints due to local mass effects such as chest pain or weight loss.   In some, patient's systemic symptoms can be present due to tumors or a variety of paraneoplastic syndromes. Mediastinum can be divided into three regions, anterior, middle, and posterior mediastinum. Most common anterior mediastinal masses are thymoma and lymphomas.  In the middle, mediastinal masses are lymph node enlargement and vascular masses.  In the posterior side, masses are of neurogenic tumors and esophageal abnormalities.  A combination of clinical factors and imaging features often narrow the differential diagnosis when a mediastinal mass is detected. The above patient appears to have a neurilemmoma (or schwannoma), a benign neoplasm arising from neural tissue located in the posterior mediastinum.  The treatment is dependent on underlying etiology.  Benign lesions can be observed while malignant tumors should be removed.  In case of lymphomas, chemotherapy is the best treatment.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/24701488/" target="_blank">AR Aroor, RS Prakasha, A Study of Clinical Characteristics of Mediastinal Mass. J Clin Diagn Res. 2014; (8)2: 77-80  </a>`,
      ],
      level: "Hard",
      category: "Mediastinal Disorders",
    }),

    //Q6
    Question_Answer.create({
      question: `A 70-year-old woman comes to the clinic complaining for shortness of breath, fatigue from past few months. Patient also complain of fluctuating diplopia which gets worse by the end of the day. She has a history of Hypertension for 20 years and Lisinopril. She is a bank manager and drinks a glass of wine daily. Temperature 98.4, blood pressure 132/88, pulse 85 beats /min, respiratory rate 18 beats/ min. Pulse oximetry is 70% at room air. Physical examination is normal. On further examination, the CT scan given below showed a mass in anterior mediastinum. Which of the following test will help to confirm the diagnosis? `,
      questionImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q6/Q6+img1.png`,
      ],
      answerOptions: [
        `Anti-Jo antibodies`,
        `Anti-CCP antibodies`,
        `Antibodies against Post Acetylcholine receptors`,
        `Antibodies against Pre-Voltage gated Calcium channel`,
      ],
      correctAnswer: `Antibodies against Post Acetylcholine receptors`,
      explanation: `Based on the patient’s symptoms and CT scan finding, this patient can have myasthenia gravis. Myasthenia gravis is an autoimmune disease in which patients develop antibodies against acetylcholine receptors in the postsynaptic membrane. These patients present with fluctuating muscle weakness which gets worse by the end of the day as seen in this patient. To diagnose these patients, screening test such as Edrophonium test, also called as Tensilon test and Ice Pack test can be done. The confirmatory test for this condition is evaluation of acetylcholine receptor antibodies. Myasthenia gravis can be a paraneoplastic manifestation of underlying neoplasm such as thymoma which presents as anterior mediastinal mass on CT scan as seen in this patient. In these patients thymectomy is done to relieve the symptoms of the patients. Other patients can be treated with acetylcholinesterase inhibitors such as pyridostigmine along with immunotherapy.
      Antibodies against voltage gated calcium channels are seen in Lambert Eaton syndrome which result in decreased release of acetylcholine. These patients present with diminished or absent deep tendon reflexes along with muscle weakness. Six-minute walk test can help in evaluating patient’s shortness of breath but would not help in making diagnosis in this patient. Nerve conduction test measures how fast an electrical impulse moves but won’t help in diagnosing this patient as myasthenia gravis is an autoimmune disease.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.ncbi.nlm.nih.gov/books/NBK559331/" target="_blank">Beloor Suresh A, Asuncion RMD. Myasthenia Gravis. [Updated 2020 Aug 10]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2020 Jan.</a>`,
      ],
      level: "Hard",
      category: "Mediastinal Disorders",
    }),

    //Q7
    Question_Answer.create({
      question: `The concurrent use of PDE5 inhibitors is contraindicated with which of the following agents? `,
      questionImage: [],
      answerOptions: [`Ambrisentan`, `Bosentan`, `Macitentan`, `Riociguat`],
      correctAnswer: `Riociguat`,
      explanation: `Pulmonary arterial hypertension (PAH) is a rare but life-threatening disease
          characterized by vasoconstriction and remodeling of the small pulmonary arteries, which increases pulmonary vascular resistance (PVR) and leads to right heart failure and ultimately death. PAH-specific therapy aims to dilate the pulmonary vessels and inhibit vascular cell proliferation by targeting three main pathways: the nitric oxide (NO) pathway (targeted by phosphodiesterase type-5 [PDE5] inhibitors and a soluble guanylate cyclase [sGC] stimulator), the endothelin pathway (targeted by endothelin receptor antagonists) and the prostacyclin pathway (targeted by prostanoids). Although sildenafil and riociguat have different mechanisms of action, they both target the NO pathway to promote vasodilation [1]. They therefore may have additive systemic BP-lowering effects when administered, leading to an increased risk of hypotension.
          PDE5 inhibitors are contraindicated within 24 hours [Sildenafil] (or 48 hours with tadalafil) of taking alpha-blockers, or nitrate medications such as isosorbide mononitrate or isosorbide dinitrate. Concurrent use of these medications can lead to life-threatening low blood pressure.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/26219978/" target="_blank">Humbert M., Ghofrani H.A. The molecular targets of approved treatments for pulmonary arterial hypertension. Thorax. 2016;71(1):73–83 </a>`,
      ],
      level: "Moderate",
      category: "Pharmacology",
    }),

    //Q8
    Question_Answer.create({
      question: `Which of the following regarding PAH is false?`,
      questionImage: [],
      answerOptions: [
        `The disease affects men much more often than women.`,
        `Some patients with PAH may present with only nonspecific symptoms such as fatigue and edema.`,
        `RHC is required during diagnostic evaluation when pulmonary hypertension is suspected.`,
        `Underlying causes, as well as pulmonary capillary wedge pressure or left ventricular end-diastolic pressure, are evaluated when determining a diagnosis of PAH.`,
      ],
      correctAnswer: `The disease affects men much more often than women.`,
      explanation: `Pulmonary arterial hypertension (PAH) is characterized by pathological hemodynamic elevation in pulmonary artery pressure. Heritable PAH and Idiopathic PAH [IPAH] occur twice as frequently in females compared to males. Similarly, PAH associated with CTD is reported to occur in a female-to-male ratio of 3.8:1. In addition, women with systemic sclerosis are eight times more likely than men to suffer from PAH. Recent registries have shown that females with PAH have better survival compared to males.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4096686/" target="_blank">Lai YC, Potoka KC, Champion HC, Pulmonary Arterial Hypertension: The Clinical Syndrome; Circ Res. 2014 Jun 20; 115(1): 115–130.</a>`,
      ],
      level: "Moderate",
      category: "Pulmonary Vascular Disease",
    }),

    //Q9
    Question_Answer.create({
      question: `A 45-year-old African American woman is evaluated for a 6 month history of progressive dyspnea and she is unable to walk more than one block. She had a history of DVT and pulmonary embolism 5 years ago. Her last ER admission was 2 weeks ago and evaluated by a pulmonologist because of oxygen desaturation on ambulation.  She went to ER because of ankle swelling but does not have chest pain, cough, lightheadedness, or other localizing symptoms.  She was discharged with supplemental oxygen during exertion.  Her past medical history is of endometriosis for which she is taking birth control pills.  Her vital signs are temperature is 98.1°F, blood pressure is 120/70 mm Hg, pulse rate is 110/min and regular, and respiration rate is 22/min, PaO2 98% of 2L NC.  Her BMI is 32.  On physical examination, she is sitting comfortably in no acute distress.  The lungs are clear. Cardiac examination reveals sinus tachycardia, an increased pulmonic component of S2, and tricuspid regurgitation murmur.  Echo showed ejection fraction of 60%, tricuspid regurgitation, right ventricle systolic pressure of 65mmHg. Ankle edema is noted bilaterally.  Labs studies are normal CBC, BMP except for a B-type natriuretic peptide level of 900 pg/mL. Arterial blood gas measurement breathing ambient air shows a pH of 7.43, a PCO2 of 37 mm Hg and a PO2 of 65 mmHg. Which of the following will help to confirm the etiology of pulmonary hypertension in this patient?`,
      questionImage: [],
      answerOptions: [
        `CT without contrast`,
        `Right heart catheterization`,
        `6-minute walk test`,
        `Ventilation/Perfusion scan`,
      ],
      correctAnswer: `Ventilation/Perfusion scan`,
      explanation: `This patient’s presentation is suggestive of chronic thromboembolic pulmonary hypertension (CTEPH) therefore the more appropriate next step in diagnosis is a ventilation/perfusion scan and remains the screening test of choice. Patients have evidence of past DVT and PE now has pulmonary hypertension on ECHO. Given in this picture is the specimen of clots removed through embolectomy.`,
      explanationImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q9/A9+img1.jpg`,
      ],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/21330453/" target="_blank">Fedullo P, Kerr KM, Kim NH, Auger WR. Chronic thromboembolic pulmonary hypertension. Am J Respir Crit Care Med. 2011;183:1605-1613. </a>`,
      ],
      level: "Moderate",
      category: "Pulmonary Vascular Disease",
    }),

    //Q10
    Question_Answer.create({
      question: `A 70-year-old Mexican male was evaluated in the emergency department for a urinary tract infection, hypotension, confusion and lethargy. He was started on antibiotics, was administered in the emergency department and admitted.  His vital signs on admission were temperature 101.0 °F, blood pressure is 80/55 mm Hg, pulse rate is 120/min, and respiration rate is 28/min.  His physical exam was normal, except for dry mouth, dry skin, cool extremities, and impaired mental status.  Urine output is diminished. Electrocardiogram shows normal sinus rhythm with normal T-wave and ST-segment morphology. Laboratory studies are done.  Hb 11.5 g/dl, WBC is 17,000/ µL, Creatinine is 1.0.  Sodium level is 110, Potassium 4.5, serum bicarbonate is 24mEq/L, serum lactate 6.0 mmol/L. He has past medical history of COPD, diabetes mellitus. The most effective initial treatment currently is?`,
      questionImage: [],
      answerOptions: [
        `Give IV steroids`,
        `Arrange for blood transfusion`,
        `Start IV fluids`,
        `IV sodium bicarbonate`,
      ],
      correctAnswer: `Start IV fluids`,
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
      level: "Moderate",
      category: "Critical Care",
    }),

    //Q11
    Question_Answer.create({
      question: `A 25-year-old woman presents to the Emergency Department (ED) with acute onset of dyspnea, wheezing, and progressive respiratory distress. She has a history of severe persistent asthma with three previous admissions to the intensive care unit, one of which required intubation. Her medications are a high-dose inhaled corticosteroid and long-acting beta agonist (ICS/LABA) only. Vital signs: Temperature 98.6 °F, blood pressure 143/100 mm Hg, pulse rate 115/min, respiration rate is 28/min. On physical examination, she appears anxious and is in marked distress. Lung auscultation reveals very faint wheezing, and the Cardiac exam showed a rapid and regular rhythm with no murmurs. ABG showed; pH 7.10, PCO2 70 mm Hg, and PO2 of 55 mm Hg. The decision was made to intubate, and the patient was intubated in the ED and placed on mechanical ventilation. Ventilator with settings: assist control, respiratory rate 14 bpm, tidal volume 500mL, FiO2 0.5. Chest radiograph shows the endotracheal tube is in good position and the lungs are hyperinflated without any infiltrates. When setting up the ventilator what is the most important feature for this patient?`,
      questionImage: [],
      answerOptions: [
        `Increased expiratory time`,
        `Increased inspiratory time`,
        `Decreased minute ventilation`,
        `Decrease inspiratory flow`,
      ],
      correctAnswer: `Increased expiratory time`,
      explanation: `This patient has status asthmaticus caused by severe airflow limitation.  Severe obstruction in patients may result in breath stacking and end positive end-expiratory pressure (auto-PEEP) because of insufficient time to complete preceding breath. Auto PEEP can result in decreased venous return, hypotension, and barotraumas.  The goal of managing ventilation is to allow adequate time for exhalation which can be achieved by increasing expiratory time, decreasing the tidal volume and respiration rate, increasing inspiratory flow rates, or using sedative.  An increased expiration duration allows time for optimal exhalation and avoiding air trapping.  In asthma patient, there are few criteria for intubation such as, physical exhaustion, altered sensorium, such as lethargy or agitation, pH < 7.2, carbon dioxide pressure increasing by more than 5 mm Hg/h or greater than 55 to 70 mm Hg or respiratory rate of greater than 40 breaths/minute, silent chest despite respiratory effort. Shortening of inspiration with a square wave pattern and an inspiratory flow rate of 60 L/min allows greater time for exhalation in each respiratory cycle and might help control hyperinflation.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.atsjournals.org/doi/full/10.1513/pats.p09st4" target="_blank">Barry Brenner, Thomas Corbridge, and Antoine Kazzi "Intubation and Mechanical Ventilation of the Asthmatic Patient in Respiratory Failure", Proceedings of the American Thoracic Society, Vol. 6, No. 4 (2009), pp. 371-379. </a>`,
        `<a href=https://pubmed.ncbi.nlm.nih.gov/32222313/" target="_blank">Hall JB, Wood LDH. Management of the critically ill asthmatic patient. Med Clin North Am 1990; 74:779-796 </a>`,
        `<a href="https://www.thoracic.org/statements/resources/allergy-asthma/asthma.pdf" target="_blank">Kohn MS. Intubation of the asthma patient. Clin Allergy Immunol 1999; 13:419–428. </a>`,
      ],
      level: "Hard",
      category: "Critical Care",
    }),

    //Q12
    Question_Answer.create({
      question: `A 62-year-old patient comes to the ER for altered mental status. He has shortness of breath, cough, and diarrhea from the past 3-4 days. Patient went to Hawaii a week ago for summer vacation. He works as an accountant. He has diabetes mellitus from 15 years and takes metformin. He has smoked 15 packs per day for 25 years. Temperature 102.1 F, pulse 72 beats/min, respiratory rate 18 bpm, blood pressure 128/85. Pulse oximetry 92% at room air. Cardiac examination showed bradycardia. Laboratory findings: Na - 126 mmol/L, K 4.5mmol/L, CL- 105 mmol/L, Fasting glucose - 112 mg/dl, AST- 98, ALT – 95. Urinalysis showed hematuria and proteinuria. Chest x ray showed bilateral diffuse interstitial infiltrates. On further examination sputum analysis revealed many neutrophils but no few microorganisms. Which of the following is responsible for this patient’s condition?`,
      questionImage: [],
      answerOptions: [
        `Mycoplasma pneumonia`,
        `Legionella pneumonia`,
        `Coccidiomycosis`,
        `Blastomycosis`,
      ],
      correctAnswer: `Legionella pneumonia`,
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
      level: "Moderate",
      category: "Infection",
    }),

    //Q13
    Question_Answer.create({
      question: `Which of the following treatments for Eosinophilic Granulomatous Polyangiitis (EGPA) has been shown to demonstrate improvements in remission, oral corticosteroid dose reductions and/or remaining free of EGPA relapse? `,
      questionImage: [],
      answerOptions: [
        `Azathioprine`,
        `Cyclophosphamide`,
        `Mepolizumab`,
        `Methotrexate`,
      ],
      correctAnswer: `Mepolizumab`,
      explanation: `Mepolizumab: It is a humanized monoclonal antibody to IL-5. This drug is approved by FDA for use in patients with age above 12 years, who have severe asthma and EGPA. A subcutaneous dose of 300 mg every four weeks is recommended. Studies have shown that this drug has a glucocorticoid sparing effect on patients [1]. It reduces exacerbations in patients with severe asthma.  It also helps improve outcomes in patients with severe asthma and eosinophilia [2].`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/25199060/" target="_blank">Bel EH, Wenzel SE, Thompson PJ, Oral glucocorticoid-sparing effect of mepolizumab in eosinophilic asthma. N Engl J Med 2014; 371(13):1189-97 </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/25199059/" target="_blank">HG Ortega, Mepolizumab treatment in patients with severe eosinophilic asthma. N Engl J Med 2014, 371:1198-1207 </a>`,
      ],
      level: "Hard",
      category: "Other Pulmonary Diseases",
    }),

    //Q14
    Question_Answer.create({
      question: `Which of the following is most helpful in distinguishing Eosinophilic granulomatosis polyangiitis (EGPA) from chronic eosinophilic pneumonia and hypereosinophilic syndrome?`,
      questionImage: [],
      answerOptions: [
        `History of asthma`,
        `Cardiac involvement`,
        `c-ANCA`,
        `Pulmonary infiltrates`,
      ],
      correctAnswer: `c-ANCA`,
      explanation: `C-ANCA: These antibodies are against neutrophil cytoplasmic antigens and are associated with EGPA. Studies have shown that these antibodies are found in more than 50% of EGPA patients and this percentage is more in patients with active or undetected disease [1]. Also, the clinical symptoms vary according to presence and absence of these antibodies [2]. For example, ANCA positive patients are more likely to have glomerulonephritis, alveolar hemorrhage and neurological disease as compared to ANCA negative patients [2].`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/12967693/" target="_blank">Keogh KA, Churg-Strauss syndrome: clinical presentation, antineutrophil cytoplasmic antibodies, and leukotriene receptor antagonists. Am J Med 2003, 115(4): 284-90 </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/16142760/" target="_blank">Sinico RA. Prevalence and clinical significance of antineurophil cytoplasmic antibodies in Churg-Strauss syndrome. Arthritis Rheum 2005; 52(9): 2926-35</a>`,
      ],
      level: "Moderate",
      category: "Other Pulmonary Diseases",
    }),

    //Q15
    Question_Answer.create({
      question: `A 75-year-old man is evaluated during a routine examination. Medical history is significant for hypertension, asthma, COPD, diabetes mellitus and multiple myeloma.  He has a history of smoking but quit 15 years ago. His medications are lisinopril, metformin, aspirin, and an albuterol inhaler that he uses as needed. He has no allergies. Vital signs are normal. The results of the physical examination are normal.  He recently heard a television commercial about getting another pneumococcal  vaccination (PCV20) and would like some more information on it.  Based on the current guidelines regarding use of pneumococcal vaccine, which of the following statements is true?`,
      questionImage: [],
      answerOptions: [
        `Based on the guidelines, he can get vaccinated with PPSV 23 alone, and then repeat PCV20 at 6-12 months later.`,
        `Based on the guidelines, he needs another dose of PPSV 23 before he can get vaccinated with PCV15.`,
        `Based on the guidelines, he does not qualify for any vaccination currently.`,
        `Based on the guidelines, he can receive one dose of PCV20 only.`,
      ],
      correctAnswer: `Based on the guidelines, he can get vaccinated with PPSV 23 alone, and then repeat PCV20 at 6-12 months later.`,
      explanation: `Based on the guidelines, published by Advisory committee for Immunization Practices (ACIP)

      1.	 There are many pneumococcal vaccines available, mainly PCV20: 20-valent pneumococcal conjugate vaccine; PCV15: 15-valent pneumococcal conjugate vaccine; PPSV23: 23-valent pneumococcal polysaccharide vaccine. Pneumococcal vaccination is indicated for adults with risk factors for acquisition of or severe adverse outcomes from pneumococcal disease. These adults should receive either PCV20 alone or PCV15 followed by PPSV23. When administering the PCV15 and PPSV23 combination, PCV15 should be given first when possible. The recommended intervals between the two vaccines may vary based on indication
      `,
      explanationImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q15/A15+img1.png`,
      ],
      explanationLinks: [],
      level: "Easy",
      category: "Infection",
    }),

    //Q16
    Question_Answer.create({
      question: `86-year-old man was brought to the emergency department by his son due to behavioral changes over the past two days. The son states that the patient has become increasingly agitated since onset of symptoms. On examination, the patient is unable to recognize his son and is unaware of the date or place. Over the next two hours the patient becomes more agitated and abusive. Which of the following medications is the agent of choice in selected older people with delirium?`,
      questionImage: [],
      answerOptions: [`Olanzapine`, `Risperidone`, `Trazodone`, `Haloperidol`],
      correctAnswer: `Haloperidol`,
      explanation: `Neuroleptics are generally the preferred agents for treatment of acute delirium and agitation. Haloperidol has been the most widely used neuroleptic. The effectiveness of haloperidol has been established by randomized, controlled clinical trials. Some atypical antipsychotics, such as risperidone, olanzapine and quetiapine have been used clinically to treat agitation in patients with delirium, with controlled trials showing efficacy at least comparable to haloperidol. However, no data are available to demonstrate any verifiable advantage of one antipsychotic over another.`,
      explanationImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q16/A16+img1.png`,
      ],
      explanationLinks: [
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3065676/" target="_blank">Fong T.G et al. Delirium in elderly adults: diagnosis, prevention and treatment. Nat Rev Neurol. 2009 Apr; 5(4): 210–220. </a>`,
      ],
      level: "Hard",
      category: "Critical Care",
    }),

    //Q17
    Question_Answer.create({
      question: `The most important predictor of chronic restrictive lung disease in sickle cell disease is:`,
      questionImage: [],
      answerOptions: [
        `Blood hemoglobin level`,
        `Number of episodes of acute chest syndrome`,
        `History of cigarette smoking`,
        `Hemoglobin SC genotype`,
      ],
      correctAnswer: `Number of episodes of acute chest syndrome`,
      explanation: `The leading cause of mortality in adults with sickle cell anemia is acute lung disease particularly pulmonary hypertension and pulmonary fibrosis.  On spirometry, pulmonary fibrosis is associated with restrictive lung diseases. Recurrent acute chest syndrome, infections, vascular infarction, and extrapulmonary restriction can lead to long standing chronic inflammation of small airways.

      In some incidents, patients with ACS can have focal changes in the body thorax indicating bone infarction. There has been some correlation of thoracic infarction and a presence of pulmonary infiltrate. Incentive spirometry can be used to prevent these complications and relieve pain.

      All the other causes are not important predictors of chronic lung disease in sickle cell disease patients.
      `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4075318/" target="_blank">Shilpa Jain, Unraveling restrictive chronic lung disease in sickle cell disease Int J Tuberc Lung Dis. 2013 Sep; 17(9): 1123–1124.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/7637747/" target="_blank">Bellet P. Incentive Spirometry to Prevent Acute Pulmonary Complications in Sickle cell disease. NEJM 1995; 333:11, 669- 703</a>`,
      ],

      level: "Hard",
      category: "Other Pulmonary Diseases",
    }),

    //Q18
    Question_Answer.create({
      question: `A 21-year-old nurse presents to the pulmonary office for further management of asthma. She is on inhaled steroids and LABA but since then she hasn't improved.  Her past medical history is significant for allergic rhinitis. Her Physical Examination revealed a healthy, awake and alert 21-year female.  No nasal polyps or nasal deformities were noted.  Labs results included normal complete blood count, IgE 30 IU/ml (nl), was also done.  Based on the spirometry flow loop provided, what is the next step?`,
      questionImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q18/Q18+img1.png`,
      ],
      answerOptions: [
        `Advise her to quit heavy exercise.`,
        `Try a short course of oral steroids.`,
        `Refer to speech therapist for breathing exercises`,
        `Discontinue albuterol`,
      ],
      correctAnswer: `Refer to speech therapist for breathing exercises`,
      explanation: `Vocal cord dysfunction (VCD) involves inappropriate (paradoxical adduction) of the vocal cord that produces partial airway obstruction, especially during inspiration. It is condition more predominant in females than male and occurring in 20 to 40 years of age.  Symptoms include  wheezing, cough, tightness in the throat, hoarseness and voice change, inspiratory difficulty, choking sensation and stridor.  VCD is often misdiagnosed as asthma exacerbation because of the wheezing and respiratory distress associated with it. Thus, a careful history is needed for a clear diagnosis.   The vocal cords abduction, or opening is controlled by the posterior cricoarytenoid muscle and adduction (closing) is via contraction of the lateral cricoarytenoid muscle. These muscles are innervated by the recurrent laryngeal nerve.  In the normal respiratory cycle, vocal cords partially abduct with inhalation and partially adduct with exhalation.  VCD is believed to be the result of laryngeal hyperresponsiveness that is prompted by irritant and non-irritants triggers that activate sensory receptors in larynx and trachea.  VCD is often diagnosed only after other potential conditions have been excluded and patients had failure to therapy.  Pulmonary function testing with a flow-volume loop reveals flattened inspiratory loop that indicates decreased airflow into the lungs (as seen in the flow loop provided).  The most effective diagnostic strategy is to confirm VCD on direct laryngoscopic visualization during a symptomatic episode.  While the anterior cord appears normal, the posterior cords will show “glottis chink”. [1]   Patients with VCD and in acute distress should be instructed with simple breathing guidance.  They should be instructed to have rapid and shallow breaths.  In other cases, use of a helium and oxygen mixture (heliox) is also effective.  For long term management strategies, treatment for symptom triggers and speech therapy along with patient education are effective parts of the treatment plan.`,
      explanationImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q18/A18+img1.png`,
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q18/A18+img2.png`,
      ],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/21205712/" target="_blank">Kenn K, Balkissoon R. Vocal cord dysfunction: what do we know? The European respiratory journal 2011;37:194-200.</a>`,
      ],

      level: "Easy",
      category: "Pulmonary Function Testing",
    }),

    //Q19
    Question_Answer.create({
      question: `A 44-year-old female, a smoker, has had an 8-month history of progressive dyspnea, cough, chest tightness and joint pain. She has worked as a hairstylist in a hair salon since age 20.  Her vital signs are stable and a physical exam reveals regular sinus rhythm and fine bibasilar crackles.  No rashes, clubbing, cyanosis, or edema is present.  A high-resolution chest CT confirmed b/l ground glass opacities without significant adenopathy or pleural fluid [IMAGE BELOW].  All labs, CBC, LFTs, renal functions are within normal.  The ANA titer is elevated at 1:360 and Rheumatoid factor is also minimally elevated at 1:50. On PFTs, VC is 65% of predicted, FEV1 is 59% of predicted, total lung capacity is 71% of predicted, residual volume is 72% of predicted, and DLCO is 60% of predicted. What is the initial treatment that you will consider in this patient?`,
      questionImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q19/Q19+img1.png`,
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q19/Q19+img2.png`,
      ],
      answerOptions: [
        `Oral Prednisone`,
        `Cellcept`,
        `Azathioprine`,
        `Methotrexate`,
      ],
      correctAnswer: `Oral Prednisone`,
      explanation: `The clinical presentation and radiographic finding for above patient indicate a pattern consistent with Interstitial pulmonary fibrosis, particularly with a nonspecific interstitial pneumonia (NSIP).  Many cases occur in the context of an underlying connective tissue disease or drug‐induced interstitial lung disease (flecainide, nitrofurantoin).  Patients present with a dry cough, shortness of breath, clubbing.  Patient’s pulmonary function testing (PFTs) are projected to demonstrate a restrictive ventilatory defect with decrease in gas transfer.  While PFTs are not essential for making the diagnosis, continued monitoring of FVC and DLCO is helpful to assess progression of disease and response to therapy and prognosis.  The most common HRCT abnormality in NSIP is bilateral ground-glass opacity with lower lobe predilection and subpleural sparing that is helping in distinguishing NSIP from UIP.  Another feature distinguishing NSIP from UIP is its responsiveness to steroids.  In more severe disease or inadequate response to steroids, azathioprine, cyclophosphamide, and cyclosporine are used.   However, Methotrexate is avoided due to pulmonary toxicity.  Patients unresponsive to medications should be considered for lung transplant.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/24032382/" target="_blank">Travis WD, Costabel U, Hansell DM, et al. An official American Thoracic Society/European Respiratory Society statement: Update of the international multidisciplinary classification of the idiopathic interstitial pneumonias. American journal of respiratory and critical care medicine 2013;188:733-48.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/9769293/" target="_blank">Cottin V, Donsbeck AV, Revel D, Loire R, Cordier JF. Nonspecific interstitial pneumonia. Individualization of a clinicopathologic entity in a series of 12 patients. American journal of respiratory and critical care medicine 1998;158:1286-93. </a>`,
      ],
      level: "Moderate",
      category: "Pharmacology",
    }),

    //Q20
    Question_Answer.create({
      question: `A 25 years G1P0 woman sent by her obstetrician to a pulmonary clinic because of multiple cough spells over a period of 6 weeks.  The cough is persistently getting worse with nocturnal paroxysm and feels “suffocated”.  She initially reported occasional wheezing and chest tightness.  Thus, she was treated for asthma exacerbation but her cough didn’t improve with bronchodilator therapy.  On examination she had an oral temperature of 37°C and the oxygen saturation was 96% on room air, blood pressure was 150/78 mmHg, pulse 110 beats/mins.  Physical exam revealed slight pharyngeal hyperemia, and lungs were clear except for intermittent rhonchi.  She denies any travel history overseas or exposure to chemicals.  She is 8 weeks pregnant and unsure about her immunization status as a child.  Based on this information, which of the following lab tests has the highest specificity for a diagnosis of Bordetella pertussis?`,
      questionImage: [],
      answerOptions: [
        `PCR assay`,
        `Nasopharyngeal swab for culture`,
        `ELISA test for IgG antibody`,
        `Sputum Gram stain`,
      ],
      correctAnswer: `ELISA test for IgG antibody`,
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
      level: "Hard",
      category: "Infection",
    }),

    //Q21
    Question_Answer.create({
      question: `A 36-year-old African American man was evaluated in the outpatient clinic for dyspnea on exertion. His medical history was unremarkable, except he was involved in motor vehicle accident 2 years ago. He denies any history of smoking. Physical examination shows dullness and decreased breath sounds at the base of the right lung and rest of the exam is normal. Laboratory studies, including fasting blood glucose, antinuclear antibody, creatinine kinase, and thyroid stimulating hormone, where normal Chest radiograph image is shown below. A pulmonary function test was done that showed moderate restrictive defect with FEV1 60% of predicted, FVC 62 % of predicted, FEV1/FVC ratio of 73%, TLC of 60% predicted, DLCO of 76 % of predicted.  Which of the following tests will confirm the diagnosis? `,
      questionImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q21/Q21+img1.png`,
      ],
      answerOptions: [
        `Echocardiogram study`,
        `Arterial blood gas`,
        `Sniff test`,
        `Cardiopulmonary exercise test`,
      ],
      correctAnswer: `Sniff test`,
      explanation: `The above patient has a motor vehicle accident and his physical findings are significant for dullness to percussion and absent breath sounds over the lower base of right lung, which is suggestive for right-sided diaphragmatic paralysis/weakness. Compression or destruction of the phrenic nerve by surgery, trauma, or enlargement of lymph nodes or aneurysmal vessels may also cause the condition. Bilateral diaphragmatic paralysis can result from several causes, including cervical and thoracic surgery, cold cardioplegia for cardiac surgery, trauma, multiple sclerosis, and neuralgic amyotrophy. Unilateral diaphragmatic paralysis is most often detected as an asymptomatic radiographic finding. In the absence of associated pleuropulmonary disease, most adult patients with unilateral diaphragmatic paralysis but without a coexisting pulmonary disease remain asymptomatic. Sniff test (chest fluoroscopy) is an exam that checks how the diaphragm moves when you breathe normally and when you inhale quickly. The diaphragm normally moves down when you inhale, and up when you exhale. Both the right and left sides of the diaphragm should move in the same direction at the same time. This will exaggerate the difference in a paralyzed or abnormal hemi-diaphragm, which will move paradoxically in the wrong direction. Maximal expiratory pressure (MIP), sniff nasal inspiratory pressure (SNIP), and maximal expiratory pressure (MEP) measurements can localize respiratory muscle weakness. A low MIP and SNIP but a normal MEP suggests isolated inspiratory muscle weakness (usually diaphragmatic), while a low MIP, SNIP, and MEP suggests generalized skeletal muscle weakness. Isolated expiratory muscle weakness (normal MIP and SNIP and low MEP) is rare. Pulmonary function tests may also be helpful. A decrease in vital capacity of 30 to 50% when the patient is supine supports the diagnosis of bilateral diaphragmatic paralysis, whereas a decrease in vital capacity of 10 to 30% may be seen with mild diaphragmatic weakness or unilateral diaphragmatic paralysis. Ultrasonography can also distinguish a functioning from a non functioning diaphragm; it can be used to diagnose both unilateral and bilateral diaphragmatic paralysis and to monitor recovery of the paralyzed diaphragm.  Chest MRI is useful to evaluate tumors, but it will not be helpful to diagnose diaphragmatic paralysis.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/3752705/" target="_blank">Lisboa C, Paré PD, Pertuzé J, Contreras G, Moreno R, Guillemi S, Cruz E. Inspiratory muscle function in unilateral diaphragmatic paralysis. Am Rev Respir Dis. 1986 Sep; 134(3):488-92 </a>`,
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC461156/" target="_blank">Laroche CM, Mier AK, Moxham J, Green M. Diaphragm strength in patients with recent hemidiaphragm paralysis. Thorax. 1988 Mar; 43(3):170-4. </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/3202460/" target="_blank">Laroche CM, Carroll N, Moxham J, Green M. Clinical significance of severe isolated diaphragm weakness. Am Rev Respir Dis. 1988 Oct; 138(4):862-6. </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/3354995/" target="_blank">Mier-Jedrzejowicz A, Brophy C, Moxham J, Green M. Assessment of diaphragm weakness. Am Rev Respir Dis. 1988 Apr; 137(4):877-83 </a>`,
      ],
      level: "Hard",
      category: "Pulmonary Function Testing",
    }),

    //Q22
    Question_Answer.create({
      question: `The biomarker exhaled nitric oxide (FeNO) is most reduced in response to which of the following biologic therapies for bronchial asthma?`,
      questionImage: [],
      answerOptions: [
        `Anti-IL-4 receptor and anti-IL-13`,
        `Anti-IL-5`,
        `CXCR2 antagonist`,
        `Anti-IL-17 receptor monoclonal antibody`,
      ],
      correctAnswer: `Anti-IL-4 receptor and anti-IL-13`,
      explanation: `In allergic airway inflammation, mast cells and antigen-specific Th2 cells are activated, resulting in the production of cytokines, including IL-4, IL-5, and IL-13. IL-4 and IL-13 result in the upregulation of inducible nitric oxide synthase (iNOS). This upregulation  results in the increased production of FENO in airway epithelial cells.Thus,  Fractional exhaled nitric oxide (FENO) is used as a marker of T-helper cell type 2-mediated allergic airway inflammation. In general Sputum eosinophil is a good biomarker to adjust treatment with inhaled corticosteroids (ICS) and can be satisfactorily approached by FENO and blood eosinophil counts in clinical practice. In general, FENO and serum periostin are markers of the potential response to omalizumab, anti-IL-13 and anti-IL-4 therapy while blood eosinophils are best predictor for a response to anti-IL-5 therapy. Agents CXCR2 Antagonist and ANTI-IL -17 Receptor  monoclonal Antibody are not associated with changes with nitric oxide.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/26467509/" target="_blank">Schleich F,  Demarche Sophie D, and Louis Renaud L. Biomarkers in the Management
          of Difficult Asthma. Curr Top Med Chem. 2016 Apr; 16(14): 1561–1573.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/26836891/" target="_blank">Srinivas R. Mummadi R, Peter Y. Hahn   Update on Exhaled Nitric Oxide in Clinical Practice Asthma is characterized by chronic airway inflammation. CHEST 2016; 149(5):1340-1344</a>`,
      ],
      level: "Hard",
      category: "Asthma",
    }),

    //Q23
    Question_Answer.create({
      question: `A 62-year-old man is brought to the emergency department after losing consciousness at work. He reports difficulty walking over the past couple of days due to an infected wound on his right foot. His other medical problems include diabetes mellitus and hyperlipidemia. His blood pressure is 80/40 mm Hg and pulse is 120/min and regular. His skin is cold and clammy. Right heart catheterization is performed, and the following results are obtained: Right atrial pressure, mean 20 mm Hg (N: 0-8mm Hg), Pulmonary artery pressure 40/20 mm Hg (N: 15-28/5-16mm Hg), Pulmonary capillary wedge pressure 8mm Hg (N: 6-12mm Hg) Which of the following is the most likely diagnosis?`,
      questionImage: [],
      answerOptions: [
        `Aortic dissection`,
        `Hypovolemic shock`,
        `Left anterior descending artery occlusion`,
        `Massive Pulmonary embolism`,
      ],
      correctAnswer: `Massive Pulmonary embolism`,
      explanation: `This patient is hemodynamically unstable (hypotension, tachycardia, cold and clammy skin, evidence of shock) due to infection of the foot presenting with massive pulmonary embolism (PE). Consequences of massive PE can lead to right ventricular dysfunction. Pulmonary artery pressure will rise leading to right ventricular function impairment and dilatation of the RV. This can lead to RV ischemia eventually leading to LV filling impairment with compromised cardiac output and hypoperfusion. The capillary wedge pressure is normal in these patients.
      Patients with aortic dissection present with severe substernal chest pain that radiates to the back and elevated blood pressure. On physical examination diastolic decrescendo murmur can be present if the aortic valve is involved. Left Anterior descending artery occlusion results in ST segment elevation leading to myocardial infarction or cardiogenic shock. The different types of shock are shown in the chart below.
      `,
      explanationImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q23/A23+img1.png`,
      ],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/23319967/" target="_blank">Sekhri V, Mehta N, Rawat N, Management of massive and nonmassive pulmonary embolism. Arch Med Sci. 2012 Dec 20; 8(6): 957–969.</a>`,
      ],
      level: "Hard",
      category: "Critical Care",
    }),

    //Q24
    Question_Answer.create({
      question: `What is the most common comorbid condition in COPD?`,
      questionImage: [],
      answerOptions: [
        `Lung cancer`,
        `Osteoporosis`,
        `Cardiovascular disease`,
        `Gastroesophageal reflux`,
      ],
      correctAnswer: `Cardiovascular disease`,
      explanation: `COPD patients are likely to have many comorbidities. Among these comorbidities cardiovascular diseases are most seen in patients with COPD. In fact, studies have shown that cardiovascular disease is more common in COPD patients as compared to non- COPD patients [1,2]. Therefore, in patients with COPD certain tests like baseline ECG, dobutamine stress imaging, and limitations may preclude exercise stress testing, and potential bronchoconstriction is often a contraindication to vasodilator radionuclide myocardial perfusion imaging. Also, serum troponin is measured in patients who come with COPD exacerbation [3]`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/20871122/" target="_blank">Feary JR, Rodrigues LC, Smith CJ. Prevalence of major comorbidities in subjects with COPD and incidence of myocardial infarction and stroke: a comprehensive analysis using data from primary care. Thorax 2010; 65(11):9556-62</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/26208998/" target="_blank">Chen W, Thamas J, Sadatsafavi M, FitzGerald JM, Risk of cardiovascular comorbidity in patients with chronic obstructive pulmonary disease: a systematic review and meta-analysis. Lancet Respir Med. 2015 Aug;3(8):631-9.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/29966745/" target="_blank">Vespasiani-Gentilucci U .The pharmacological treatment of chronic comorbidities in COPD: mind the gap! Pulm Pharmacol Ther. 2018 Aug;51:48-58</a>`,
      ],
      level: "Easy",
      category: "Chronic Obstructive Pulmonary Disease",
    }),

    //Q25
    Question_Answer.create({
      question: `If you called upon to intubate a patient. Which one of the following choices you would consider as the best predictor of a Difficult intubation?`,
      questionImage: [],
      answerOptions: [
        `Degree of cervical spine mobility.`,
        `Prominence of the incisors.`,
        `Short hyomental–thyromental distance.`,
        `Inability to bite the upper lip with the lower teeth.`,
      ],
      correctAnswer: `Inability to bite the upper lip with the lower teeth.`,
      explanation: `One of the most important advances in airway management has been the development of physical examination grading scales to help predict a Difficult airway. Some scales rely only on the visibility of the vocal cords on laryngoscopy, whereas others use pre-laryngoscopic factors. The factors used in assessment include increased weight, decreased cervical spine mobility, decreased jaw mobility, retrognathia, and prominent incisors, all of which are associated with increased difficulty in intubation. Other aspects of physical examination that can be used to assess the likelihood of a Difficult intubation include the hyomental–thyromental distance, with shorter distances indicating greater difficulty, and the Mallampati score, which is used to assess the visibility of oropharyngeal structures with the mouth opened maximally. Findings from a recent systematic review suggest that the best predictor is the inability to bite the upper lip with the lower teeth. However, no finding on physical examination and no specific risk factor consistently rule out a potentially Difficult intubation. In short, one should always be prepared to manage a Difficult airway.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/30721300/" target="_blank">Detsky ME, Jivraj N, Adhikari NK Will This Patient Be Difficult to Intubate? The Rational Clinical Examination Systematic Review. JAMA 2019; 321(5): 493-503</a>`,
      ],
      level: "Hard",
      category: "Critical Care",
    }),

    //Q26
    Question_Answer.create({
      question: `An 18-year-old male patient with cystic fibrosis underwent bilateral lung transplant and is recovering in ICU with mechanical ventilation (MV).  Both intraoperative and early post-operative periods were uneventful therefore, he was weaned off MV. Two months later he developed progressive severe hypoxemia (PO2/FiO2 of 130 mmHg), with normal filling pressures (a central venous pressure of 7 mmHg and a wedge pressure of 12 mmHg). His further clinical course was complicated by grade 3 primary graft rejection and was treated with ECMO resulting in improvement of respiratory failure.  PFTs values at 6 months intervals were FEV1 72 % of predicted, FVC 68 % of predicted, FEV1/FVC 88% of predicted. At 9-month post-transplant interval, he reports of having nonproductive cough and dyspnea on exertion. Which of the following is an early indicator of allograft dysfunction in patients with lung transplant?`,
      questionImage: [],
      answerOptions: [
        `Decrease in FEV1`,
        `Sputum production`,
        `Increase in Neutrophils`,
        `Chest x ray`,
      ],
      correctAnswer: `Decrease in FEV1`,
      explanation: `Chronic allograft rejection has remained a major source of morbidity and mortality following lung transplantation.  A major obstacle limiting survival is Bronchiolitis Obliterans Syndrome (BOS).  BOS occurs via a fibrotic process causing progressive narrowing of lumen and airflow obstruction as a pathological manifestation.  Some of the risk factors are listed below. The clinical symptoms are non-special with dyspnea on exertion and nonspecific cough and a normal physical exam.  The key clinical indicator for BOS is a reduction of forced expiratory volume in 1 second (FEV1) that is unresponsive to bronchodilators.  The diagnosis of BOS is usually made by clinical, physiological, and radiographic parameters.  No labs test is available to diagnosis BOS.  Chest imaging studies have a low sensitivity for identification of BO and are not used for screening; however, HRCT (with inspiratory/expiratory view) can show areas of hyperinflation and possibly bronchiectasis.  Treatment includes long-term azithromycin, immunosuppressive medication.  Statins, Captopril and Extracorporeal Photopheresis
        have also indicated some efficacy in treating BOS.`,
      explanationImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q26/A26+img+1.png`,
      ],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/21813529/" target="_blank">Bronchiolitis Obliterans Syndrome The Final Frontier for Lung Transplantation Jamie L. Todd, MD; and Scott M. Palmer, MD, MHS, FCCP CHEST 2011; 140(2): 502 – 508</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/11897517/" target="_blank">Estenne M, Maurer JR, Bohler A, et al. Bronchiolitis obliterans syndrome 2001: An update of the diagnostic criteria. J Heart Lung Transplant 2002; 21:297</a>`,
      ],
      level: "Hard",
      category: "Lung Transplant",
    }),

    //Q27
    Question_Answer.create({
      question: `A previously healthy 70-year-old woman presented to the emergency department ninety minutes after developing acute onset speech difficulty and right-sided weakness.  On presentation, she patient had a blood pressure of 140/70 mmHg, heart rate of 50 beats per minute, respiratory rate of 20 breaths per minute and temperature of 36.6 degrees Celsius. Physical examination findings were significant for global aphasia, right central type facial palsy and right hemiplegia. The rest of her exam was normal.
        Pt was diagnosed as a case of ischemic stroke and intravenous recombinant tissue plasminogen activator (rtPA) infusion was started. During the infusion, the patient developed severe shortness of breath with pink frothy secretions. Vital signs showed BP 175/100 mmHg, HR 115 bpm, RR 28 bpm, oxygen saturation 77% on room air. Chest auscultation revealed bilateral crackles and rales. The infusion was discontinued, and the patient was intubated for hypoxic respiratory failure and placed on a mechanical ventilator.  Repeat head CT showed evidence of cerebral edema with subarachnoid hemorrhage.  Chest x-ray revealed generalized increased pulmonary infiltration and CT scan of the chest showed interlobular septal thickening with ground glass opacities. Which of the following is the most appropriate ventilation strategy in the management of this patient?`,
      questionImage: [],
      answerOptions: [
        `Permissive Hypercapnia and low tidal volume ventilation`,
        `Optimal oxygenation with PEEP`,
        `Start low dose steroids`,
        `Extracorporeal membrane oxygenation`,
      ],
      correctAnswer: `Optimal oxygenation with PEEP`,
      explanation: `Neurogenic pulmonary edema (NPE) is an increase in pulmonary interstitial and alveolar fluid that is due to an acute central nervous system injury and can develop within minutes to hours of a severe central nervous system insult. It is sometimes classified as a form of the acute respiratory distress syndrome (ARDS), but its pathophysiology and prognosis are different.  NPE characteristically presents soon after severe central nervous system insult such as subarachnoid hemorrhage (SAH) or traumatic brain injury (TBI).  Dyspnea is the most common symptom along with pink frothy secretion.  Physical examination generally reveals tachypnea, tachycardia, and basilar rales. Chest radiographs typically show a normal size heart with bilateral alveolar opacities.  Hemodynamic measurements are usually normal by the time NPE is diagnosed, including the blood pressure, cardiac output, and pulmonary capillary wedge pressure.  Definitive diagnosis of neurogenic pulmonary edema (NPE) is Difficult, and it is based on the following criteria:   The presence of bilateral opacities   
        ●	PaO2/FiO2 ratio <200 
        ●	No evidence of left atrial hypertension 
        ●	Presence of central nervous system (CNS) injury (severe enough to have caused significantly increased intracranial pressure) 
        ●	Absence of other common causes of acute respiratory failure or acute respiratory distress   syndrome  (ARDS; eg, aspiration, massive blood transfusion, sepsis) 
        Regarding treatment and management, the focus is on controlling the underlying neurological injury.  In many cases, NPE resolves within 48-72 hours.  General supportive care including:   
        ●	Supplemental oxygen to correct for hypoxemia. 
        ●	PEEP to prevent atelectasis and severe hypoxemia. 
        ●	Peak inspiratory (plateau) pressure should be kept below 30-35 cm H2O, and normocapnia (pCO2 35-40 mmHg) should be maintained to prevent an increase in ICP.
        Other options include inhaled nitric oxide, and extra corporeal membrane oxygenation (ECMO) in patients with NPE and severe hypoxemia, but there is no systematic evidence supporting a benefit from these treatments in such patients.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/26066018/" target="_blank">Busl, KM et al.  Neurogenic pulmonary edema.  Crit Care Med 2015;43:17105.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/22429697/" target="_blank">Davison DL, et al.  Neurogenic pulmonary edema. Crit Care. 2012;16(2):212</a>`,
      ],
      level: "Hard",
      category: "Critical Care",
    }),

    //Q28
    Question_Answer.create({
      question: `In what situations are pulmonary fungal infections not typically found?`,
      questionImage: [],
      answerOptions: [
        `Patient on Systemic chemotherapy`,
        `Organ transplant patients`,
        `HIV positive patient with CD4 counts <200`,
        `Patients with complications of tuberculosis`,
      ],
      correctAnswer: `Patients with complications of tuberculosis`,
      explanation: `Opportunistic fungi like Aspergillus, Cryptococcus, Pneumocystis and endemic fungi are the most common causes of fungal lung infections in immunocompromised patients. These include patients suffering from immunodeficiency disorders like HIV/AIDS, cancer patients on chemotherapy or patients of bone marrow/stem cell transplantation on immunosuppressive therapy. The macrophages, dendritic cells and recruited neutrophils are the first line of defense against fungal infection. NK cells, inflammatory cytokines, interferon gamma and IL-17 are involved in host’s defense against pulmonary fungal infection.  Tuberculosis infection is not a neutrophilic phenomenon and not associated with invasive fungal infection.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/31333658/" target="_blank">Li Z, Lu G, Meng G. Pathogenic Fungal Infection in the Lung 2019. Front. Immunol. 10:1524</a>`,
      ],
      level: "Easy",
      category: "Infection",
    }),

    //Q29
    Question_Answer.create({
      question: `Which one of the following statements is true regarding contraception and pregnancy in patients with pulmonary arterial hypertension?`,
      questionImage: [],
      answerOptions: [
        `Patients should be carefully followed during pregnancy; the presence of pulmonary hypertension is not a major factor in management of these patients.`,
        `Bosentan can be used in patients on Progesterone only contraceptive pills.`,
        `In general, patients with PAH are advised to use two methods of contraception to be used at the same time.`,
        `Estrogen-containing contraceptives can safely be used in all patients with PAH.`,
      ],
      correctAnswer: `In general, patients with PAH are advised to use two methods of contraception to be used at the same time.`,
      explanation: `Pregnancy in women with pulmonary hypertension (PH) is known to be associated with significantly high morbidity and mortality rates, with an estimated mortality between 30% and 56%. [1] The physiological changes that occur during pregnancy and the peripartum period are poorly tolerated.   The causes of poor maternal outcomes are varied and include risk of death from right heart failure and stroke from intracardiac shunting. Most of the maternal PH-associated deaths occur during labor or within 1-month post- delivery.[2] Current guidelines clearly recommend the avoidance of pregnancy in women with PAH and termination when pregnancy does occur [3].

        Estrogen-containing contraceptives increase risk of VTE but may be used when patients are on anticoagulation. Progestogen-only methods of contraception can be used in women with PAH. However, Progestogen-only pills may have reduced efficacy in women taking Bosentan and should not be used as the sole method of contraception in these patients. Given the risk of drug–drug interactions, the potential contraindication of hormonal methods and the unreliability of barrier methods, two methods of contraception may be used at the same time [4]
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/22848817/" target="_blank">Bassily-Marcus AM, Yuan C, Oropello J, Manasia A, Kohli-Seth R, Benjamin E. Pulmonary hypertension in pregnancy: Critical care management. Pulm Med. 2012;2012:709407</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/22139549/" target="_blank">Smith JS, Mueller J, Daniels CJ. Pulmonary arterial hypertension in the setting of pregnancy: A case series and standard treatment approach. Lung. 2012;190:155-160</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/26320113/" target="_blank">Galiè N, Humbert M, Vachiery JL, et al. 2015 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension.  Eur Heart J 2016; 37: 67–119</a>`,
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4556496/" target="_blank">Hemnes AR, Kiely DG, Cockrill BA, et al. Statement on pregnancy in pulmonary hypertension from the Pulmonary Vascular Research Institute. Pulm Circ 2015; 5: 435–465</a>`,
      ],
      level: "Moderate",
      category: "Pulmonary Vascular Disease",
    }),

    //Q30
    Question_Answer.create({
      question: `What is the most common cause of bronchiolitis obliterans in children? `,
      questionImage: [],
      answerOptions: [
        `Bacterial Pneumonia`,
        `Trauma`,
        `Adenovirus infection`,
        `Hematopoietic Stem Cell Transplantation`,
      ],
      correctAnswer: `Adenovirus infection`,
      explanation: `Bronchiolitis Obliterans (BO) is an infrequent chronic and obstructive lung disease secondary to an insult to the terminal airway and its surroundings. In children, the most common presentation is the post-infectious variant [most commonly due to adenovirus infection], closely related to a severe viral infection in the first three years of life. When it occurs after lung transplantation of hematopoietic stem cell transplantation (HSCT) it is called bronchiolitis obliterans syndrome. It is one of the most common noninfectious complications after lung transplant and hematopoietic stem cell transplantation.

        Post-transplant BO is progressive while post-infectious BO does not seem to be, but both forms share some common pathways that result in a characteristic histopathology of bronchiolar obliteration. In adults outside of transplantation, bronchiolitis obliterans can be seen after exposure to inhaled toxins and gasses including sulfur mustard gas, nitrogen oxides, diacetyl (used as popcorn flavoring), fly ash and fiberglass. Bronchiolitis obliterans is also associated with autoimmune disorders, especially rheumatoid arthritis and less commonly with inflammatory bowel disease.

        Though it can occur in children after any viral infection however, adenovirus (Ad) is by far the most common agent linked to the development of post-infectious BO. Mechanical ventilation is also a strong risk factor for the development of the disease. Lung function is characterized by a moderately severe to severe obstruction. HRCT shows mosaic attenuation, bronchial wall thickening, atelectasis or bronchiectasis. Treatment includes steroids, bronchodilators, Azithromycin as an anti-inflammatory agent.  Lung transplantation remains the final option for children with PIBO who have progressed to end-stage lung disease.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/30798629/" target="_blank">Kavaliunaite E, Aurora P. Diagnosing and managing bronchiolitis obliterans in children. Expert Rev Respir Med. 2019 May;13(5):481-488</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/30523731/" target="_blank">Bondeelle L, Bergeron A. Managing pulmonary complications in allogeneic hematopoietic stem cell transplantation. Expert Rev Respir Med. 2019 Jan;13(1):105-119</a>`,
      ],
      level: "Moderate",
      category: "Infection",
    }),

    //Q31
    Question_Answer.create({
      question: `In a patient Pulmonary Artery hypertension (Group 1) is present if Mean Pulmonary Artery pressure [MPAP] is:`,
      questionImage: [],
      answerOptions: [
        `10 mmHg with PCWP < 15 mmHg`,
        `15 mmHg with PCWP < 15 mmHg`,
        `25 mmHg with PCWP < 15 mmHg`,
        `30 mmHg with PCWP >15 mmHg`,
      ],
      correctAnswer: `25 mmHg with PCWP < 15 mmHg`,
      explanation: `The hemodynamic definition of pulmonary arterial hypertension (PAH) is a mean pulmonary artery pressure at rest greater than or equal to 20 mmHg in the presence of a pulmonary capillary wedge pressure less than or equal to 15 mmHg. A normal mean pulmonary artery pressure for a healthy patient is 12-16 mmHg and a normal wedge pressure is 6-12 mmHg. Basically, in patients with PAH the pressures in the right side of the heart and the pulmonary arteries are elevated while the pressures in the left side of the heart are normal. These specific pressures can only be measured accurately via right heart catheterization.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/30545968/" target="_blank">Simonneau G, Montani D, Celermajer DS, Denton CP, Gatzoulis MA, Krowka M, et al. Haemodynamic definitions and updated clinical classification of pulmonary hypertension. Eur Respir J. 2019;53(1).</a>`,
      ],
      level: "Easy",
      category: "Pulmonary Vascular Disease",
    }),

    //Q32
    Question_Answer.create({
      question: `Which is NOT true for mediastinal goiter?`,
      questionImage: [],
      answerOptions: [
        `Most of the lesions can be resected via collar incision`,
        `Goiter is seen in only in anterior or middle mediastinum`,
        `Calcification is a common sign of mediastinal goiter`,
        `Vena cava superior syndrome is rare`,
      ],
      correctAnswer: `Goiter is seen in only in anterior or middle mediastinum`,
      explanation: `Goiter is seen only in anterior or middle mediastinum Intrathoracic thyroid adenoma or goiter is mostly located in the anterior mediastinum. 10%-15% are in the posterior mediastinum. Generally, patients have no symptoms in the case of a small goiter.
        As it increases in size, clinical symptoms may appear due to the compression of surrounding organs and tissues (i.e. trachea, esophagus, lungs, or even superior vena cava leading to the SVC syndrome). When the trachea, esophagus or vena cava is compressed, surgical resection of the goiter must be done. Most of the anterior goiters are removed by a transcervical approach, but posterior mediastinal goiters may need extra cervical incisions. CT scan may show a mass of variable density depending on the amount of iodine contained, presence of colloid cysts and calcified plaque. Common postoperative complications include airway collapse, hypocalcemia,
        respiratory tract infection and bleeding.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3826527/" target="_blank">Chen et al.: Complete excision of a giant thyroid goiter in posterior mediastinum. Journal of Cardiothoracic Surgery 2013. 8:207.</a>`,
      ],
      level: "Moderate",
      category: "Other Pulmonary Diseases",
    }),

    //Q33
    Question_Answer.create({
      question: `In Familial Pulmonary Artery Hypertension an abnormality has been described in which of the genes.`,
      questionImage: [],
      answerOptions: [
        `Bone morphogenetic protein receptor II gene`,
        `FOXG1 gene`,
        `Homeobox gene`,
        `CFTR gene mutation`,
      ],
      correctAnswer: `Bone morphogenetic protein receptor II gene`,
      explanation: `Genetic mutation is one of the causes of familial pulmonary artery hypertension (PAH). The most common gene associated with familial PAH is bone morphogenetic protein receptor II gene (BMPR II) which is associated with 75% of familial PAH cases and 25% of sporadic PAH cases. BMPR II gene normally inhibits vascular smooth muscle proliferation. Due to inactivating mutation of this gene, it results in excess endothelial cell proliferation and results in pulmonary artery hypertension.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/17065373/" target="_blank">Morrell NW. Pulmonary hypertension due to BMPR2 mutation: a new paradigm for tissue remodeling? Proceedings of the American Thoracic Society 2006; 3:680-6.</a>`,
      ],
      level: "Moderate",
      category: "Pulmonary Vascular Disease",
    }),

    //Q34
    Question_Answer.create({
      question: `A 24-year-old female has Pulmonary Artery Hypertension. Her doctor comments that her physical findings are classic for tricuspid insufficiency. Which of the following is associated with tricuspid insufficiency?`,
      questionImage: [],
      answerOptions: [
        `Large v wave in the jugular pulse`,
        `Increased pulse pressure`,
        `Diastolic murmur`,
        `Pansystolic murmur`,
      ],
      correctAnswer: `Pansystolic murmur`,
      explanation: `Pulmonary hypertension is defined as mean pulmonary artery pressure more than 25 mmHg at rest. These patients present with dyspnea, fatigue, exertional angina or syncope. On examination, patients have jugular venous distension, loud P2, palpable left parasternal lift and   a pansystolic murmur at the lower left sternal border (tricuspid regurgitation) and hepatomegaly. In later stages of the disease these patients can have ascites. The murmur of tricuspid regurgitation is a high pitched, pansystolic murmur and is best heard at the left lower sternal border and it radiates to the right lower sternal border.  The intensity significantly increases with inspiration due to increased venous return helping to distinguish it from mitral regurgitation. This inspiratory enhancement of the tricuspid regurgitation murmur is called "Carvallo's sign".`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/6375982/" target="_blank">O'Rourke RA, Crawford MH. Mitral valve regurgitation. Curr Probl Cardiol. 1984 May;9(2):1-52</a>`,
      ],
      level: "Easy",
      category: "Pulmonary Vascular Disease",
    }),

    //Q35
    Question_Answer.create({
      question: `Which of the following is a sensitive measure of respiratory muscle strength in patients with neuromuscular disease (NMD)?`,
      questionImage: [],
      answerOptions: [
        `a reduction in the total lung capacity (TLC).`,
        `a flat flow-volume loop.`,
        `a reduced forced vital capacity (FVC).`,
        `a reduced maximum inspiratory pressure (MIP).`,
      ],
      correctAnswer: `a reduced maximum inspiratory pressure (MIP).`,
      explanation: `Maximal inspiratory pressure (MIP) and maximal expiratory pressure (MEP) are direct measures of respiratory muscle strength and may be more sensitive in detecting early respiratory muscle dysfunction compared with spirometry[1]. MIP and MEP are noninvasive, straightforward tests in which individuals are asked to perform a forceful inspiration after an expiration to residual volume level (in the case of MIP) or expiration after a full inspiration to total lung capacity (TLC; in the case of MEP) with an open glottis against an occluded mouthpiece. They are indicated if muscle weakness could be contributing to abnormal spirometry test results, such as a low vital capacity (VC) [1].
        MIP is a measure of global inspiratory muscle strength and therefore has a close relationship with diaphragmatic strength, since the diaphragm is the major inspiratory muscle; MEP is generated through the abdominal and intercostal muscles. A low MIP but a normal MEP suggest isolated inspiratory muscle weakness [usually diaphragm] while a low MIP and MEP suggest generalized muscle weakness.  Isolated expiratory muscle weakness [normal MIP and Low MEP] is rare. The VC and the maximal inspiratory pressure (MIP also known as negative inspiratory force [NIF]) are the main respiratory parameters that are used to monitor respiratory muscle strength
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/19796415/" target="_blank">Evans JA, Whitelaw WA. The assessment of maximal respiratory mouth pressures in adults. Respir Care. 2009;54:1348–59.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/12186831/" target="_blank">American Thoracic Society/European Respiratory Society (ATS/ERS). ATS/ERS Statement on respiratory muscle testing. Am J Respir Crit Care Med. 2002;166:518–624.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/28302142/" target="_blank">Benedikt Schoser, Edward Fong, Tarekegn Geberhiwot. Maximum inspiratory pressure as a clinically meaningful trial endpoint for neuromuscular diseases: a comprehensive review of the literature. Orphanet Journal of Rare Diseases volume 12, Article number: 52 (2017) </a>`,
      ],
      level: "Easy",
      category: "Pulmonary Function Testing",
    }),

    //Q36
    Question_Answer.create({
      question: `What is the drug of choice for chronic thromboembolic Pulmonary Hypertension (CTPH) for patients who cannot undergo surgical intervention for CTPH?`,
      questionImage: [],
      answerOptions: [`Orenitram`, `Revatio`, `Bosentan`, `Riociguat`],
      correctAnswer: `Riociguat`,
      explanation: `The preferred treatment with patients with CTEPH is thromboendarterectomy. For patients who cannot undergo surgery and have persistent CTPH, Riociguat can be used which is a stimulator of soluble guanylate cyclase. It increases sensitivity of guanylate cyclase to endogenous nitric oxide which is a pulmonary vasodilator and also directly stimulates receptors that mimic the action of NO. Patients are started with a dose of 0.5 mg 3 times daily. As this drug can cause hypotension, so for patients in whom systolic pressure remains above 95 mmHg even after drug use, dose can be increased from 0.5 mg to 1.0 mg 3 times daily. This dose is further adjusted in patients with renal and hepatic impairment.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/23883377/" target="_blank">Ghofrani HA, D'Armini AM, Grimminger F, et al. Riociguat for the treatment of chronic thromboembolic pulmonary hypertension. The New England journal of medicine 2013;369:319</a>`,
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5402909/" target="_blank">Lian TY, Jiang X, Jing ZC. Riociguat: a soluble guanylate cyclase stimulator for the treatment of pulmonary hypertension. Drug design, development and therapy 2017;11:1195-207.</a>`,
      ],
      level: "Easy",
      category: "Pulmonary Vascular Disease",
    }),

    //Q37
    Question_Answer.create({
      question: `All of the following help in preventing development of high-altitude pulmonary edema in travelers with history of high-altitude pulmonary edema except?`,
      questionImage: [],
      answerOptions: [
        `Taking nifedipine one day before ascent`,
        `Phosphodiesterase-5 inhibitors one day before ascent`,
        `Acetazolamide one day before ascent`,
        `Allowing time for proper acclimatization`,
      ],
      correctAnswer: `Acetazolamide one day before ascent`,
      explanation: `High-altitude pulmonary edema is the leading cause of death from altitude illness, but it is avoidable with careful ascent and reversible with early recognition and treatment. Small randomized trials have shown that when started one day before ascent, prophylactic, nifedipine [1] and phosphodiesterase-5 inhibitors (tadalafil , sildenafil [2] reduce the incidence of high-altitude pulmonary edema in persons with a history of the condition, whereas acetazolamide does not.[1] [4] No comparative studies have shown one type of prophylactic agent to be superior to another.
          It is well known that supplemental oxygen, relative rest, and descent lead to improvement in persons with high-altitude pulmonary edema.[5] Immediate descent is the treatment of choice. Supplemental oxygen may be administered if available, and simulated descent by placing the patient in a portable hyperbaric chamber may be helpful temporarily. When descent is not possible, limited evidence suggests that treatment with acetazolamide, bed rest, nifedipine, supplemental oxygen, salmeterol, or phosphodiesterase-5 inhibitors may improve oxygen saturation and pulmonary edema.[5] There is no strong evidence that medications improve outcomes or facilitate resolution of high-altitude pulmonary edema is better than descent alone.
          `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/1922223/" target="_blank">Bärtsch P, Maggiorini M, Ritter M, Noti C, Vock P, Oelz O. Prevention of high-altitude pulmonary edema by nifedipine. N Engl J Med 1991;325:1284-9.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/17015867/" target="_blank">Maggiorini M, Brunner-La Rocca HP, Peth S, et al. Both tadalafil and dexamethasone may reduce the incidence of high-altitude pulmonary edema: a randomized trial. Ann Intern Med. 2006;145(7):497–506</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/18800957/" target="_blank">Basnyat B, Hargrove J, Holck PS, et al. Acetazolamide fails to decrease pulmonary artery pressure at high altitude in partially acclimatized humans. High Alt Med Biol. 2008;9(3):209–216.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/31248818/" target="_blank">Luks AM, Auerbach PS, Freer L, et al.Wilderness Medical Society clinical practice guidelines for the prevention andtreatment of acute altitude illness: 2019 update. Wilderness Environ Med 2019;30:Suppl:S3-S18.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/35081281/" target="_blank">Luks AM, Hackett PH. Medical Conditions and High-Altitude Travel.N Engl J Med. 2022 Jan 27;386(4):364-373.</a>`,
      ],
      level: "Moderate",
      category: "Pharmacology",
    }),

    //Q38
    Question_Answer.create({
      question: `Which of these counseling techniques do you think   provides the greatest likelihood of achieving successful tobacco cessation?`,
      questionImage: [],
      answerOptions: [
        `Group counseling`,
        `Individual counseling`,
        `Brief physician advice`,
        `Motivational interviewing`,
      ],
      correctAnswer: `Motivational interviewing`,
      explanation: `Healthcare professionals frequently advise people to improve their health by stopping smoking. Such advice may be brief, or part of more intensive interventions.

        Group counseling is a form of therapy which works on the belief people benefit from shared experience. Usually, it focused on a particular issue, like obsessive-compulsive disorder or anger management. While a therapist usually manages the group, contributions from other members are considered valuable since all in the group share similar issues.

        Individual counseling is a one-on-one discussion between the counselor and the client, who is the person seeking treatment. The two form an alliance, relationship or bond that enables trust and personal growth.

        Brief physician advice may also help patients quit smoking [1]. Assuming an unassisted quit rate of 2 to 3%, a brief advice intervention can increase quitting by a further 1 to 3%.

        Motivational Interviewing, originally developed by William Miller[2] in his work with problem drinkers, is a counseling style designed to help clients build commitment and reach a decision to change. The principal purpose of motivational interviewing is to help clients resolve their ambivalence (“I know smoking is not good for me, BUT I enjoy it; it calms me down; it helps me keep weight off, etc.”) and move along the continuum of change. “Motivational Interviewing assists the individual in changing his or her perception of consequences…that [ultimately] change behavior”[3] Motivational interviewing (MI) is a treatment approach that has been widely examined as an intervention for tobacco dependence and is recommended in clinical practice guidelines.[4]
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/23728631/" target="_blank">Stead LF, Physician advice for smoking cessation.  Cochrane Database Syst Rev. 2013 May 31;5 </a>`,
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2759607/" target="_blank">Miller WR, Rollnick S. Motivational interviewing: Preparing people for change. 2nd ed. New York, NY: Guilford Press; 2002</a>`,
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2991057/" target="_blank">Ingersoll KS, Wagner CC, Gharib S. Motivational groups for community substance abuse programs. 3rd edition. Rockville, MD: Substance Abuse Mental Health Services Administration; 2006.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/21114344/" target="_blank">Hettema JE, Hendricks PS. Motivational interviewing for smoking cessation: a meta-analytic review. J Consult Clin Psychol. 2010 Dec;78(6):868-84.</a>`,
      ],
      level: "Easy",
      category: "Other Pulmonary Diseases",
    }),

    //Q39
    Question_Answer.create({
      question: `Which of the following is the most common secondary complication of Cystic Fibrosis?`,
      questionImage: [],
      answerOptions: [
        `Dementia`,
        `Osteoporosis`,
        `Depression`,
        `Cystic Fibrosis related Diabetes`,
      ],
      correctAnswer: `Cystic Fibrosis related Diabetes`,
      explanation: `Cystic Fibrosis is the most common fatal recessive genetic disorder in white population.  It is caused by abnormalities in cystic fibrosis Transmembrane conductance regulator [CFTRE]-a chloride channel involved in electrolyte and water across the cell membrane.  The most common mutation of CFTR is ∆ F508 in which a phenylalanine is lost at position 508 [1].

        Cystic Fibrosis related Diabetes [CFRD] is the most common secondary complication of cystic fibrosis [2]. It contributes to morbidity and mortality of this condition. Adolescents with cystic fibrosis have much higher prevalence of Diabetes than any other similar age population. CFRD is unique as it has features of both type 1 and type 2 diabetes. Though the pathophysiology is poorly understood Insulin deficiency is clearly the main component.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/2570460/" target="_blank">Kerem B, Rommens JM. et.al. Identification of cystic fibrosis gene: genetic analysis Science. 1989; 245:1073-80</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/24622267/" target="_blank">Ode KL, Moran A. New insights into cystic fibrosis-related diabetes in children. The LANCET Diabetes and Endocrinology 2013 June 30-35</a>`,
      ],
      level: "Easy",
      category: "Bronchiectasis",
    }),

    //Q40
    Question_Answer.create({
      question: `Which Cardiac arrhythmia occurs most commonly during sleep in patients with Obstructive Sleep Apnea?`,
      questionImage: [],
      answerOptions: [
        `Atrial fibrillation`,
        `Sinus Arrest`,
        `Non-Sustained ventricular Tachycardia`,
        `Atrioventricular conduction block`,
      ],
      correctAnswer: `Non-Sustained ventricular Tachycardia`,
      explanation: `It is estimated that up to 50% of patients with OSA display sleep related cardiac arrhythmias and their frequency increases in proportion to the AHI [Apnea Hypopnea
          Index] and the depth of hypoxemia [1]. Non sustained ventricular tachycardia appears to be the most common, followed by sinus arrest, second degree atrioventricular conduction block, and premature contractions [2]. There is also a well-established association between atrial fibrillation and OSA. The sleep heart Health study revealed that 4.8% of patients with OSA [AHI>5] suffered from atrial fibrillation as compared to 0.9% of those without OSA [3].
          `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/6193700/" target="_blank">Guilleminault C, et.al. Cardiac arrhythmia and conduction disturbances. Am j cardiol  1983; 52: 490-494</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/7774322/" target="_blank">Hoffsttein V, et al. Cardiac arrhythmias, snoring and sleep apnea. Chest 1994;106:466-471</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/16424443/" target="_blank">Mehra R, et.al. Association of nocturnal arrhythmias with sleep-disordered breathing: The Sleep Heart Health Study. Am J Crit Care Med 2006;173:910-916</a>`,
      ],
      level: "Easy",
      category: "Sleep",
    }),

    //Q41
    Question_Answer.create({
      question: `Which of the following is true about obstructive Sleep Apnea?`,
      questionImage: [],
      answerOptions: [
        `The prevalence is 2% in males and 4% in females`,
        `OSA is present in more than 50% of patients with BMI higher than 40 kg/m²`,
        `Patients have low leptin levels`,
        `Weight loss does not result in improvement of symptoms`,
      ],
      correctAnswer: `OSA is present in more than 50% of patients with BMI higher than 40 kg/m²`,
      explanation: `The prevalence is 4% in males and 2% in females and increases in accordance with a variety of risk factors [1] Obesity, male gender, aging, Ingestion of Alcohol, Menopausal status and history of smoking are known to increase its prevalence [2]. Prevalence of OSA in obese patients is twice than that of normal weighted individuals. The severity of OSA increases with weight. Weight loss is one of the treatments of OSA and results in reduction in severity of OSA [3]. It has been suggested that a 10% weight loss is associated with a 26% decrease in AHI [4]. 

        Leptin is secreted by fat cells and is received by receptors in the hypothalamus [5]. In normally healthy people, if leptin is present and receptors are sensitive, feeding is inhibited. More body fat means less food is required, and so leptin is secreted to inhibit feeding and the accumulation of excess adipose tissue. Overweight people generally have higher circulating leptin while leaner people have lower leptin levels. Patients with OSA also have high leptin levels [6].
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/8464434/" target="_blank">Young T, et.al. The occurrence of sleep-disordered breathing among middle-aged adults. N EJM 1993; 328:1230-1235</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/12133673/" target="_blank">Malhotra A,et.al. Obstructive sleep apnea. Lancet 2002; 360:237-245</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/19786682/" target="_blank">Foster GD, et.al. A Randomized Study on the Effect of Weight Loss on Obstructive Sleep Apnea Among Obese Patients with Type 2 Diabetes. Arch intern mED 2009; 169: 1619-1626</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/11122588/" target="_blank">Peppard PE, et.al. Longitudinal study of moderate weight change and sleep-disordered breathing. JAMA; 284:3015-3021</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/24080454/" target="_blank">Pan Weihong et al. Leptin: A biomarker for sleep disorders? Sleep Med Rev 2014; 18(3):283 - 290</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/10899061/" target="_blank">Phillips BG, et.al. Increases in leptin levels, sympathetic drive, and weight gain in obstructive sleep apnea. Am J Physiol hear Circ physiol 2000;279:H234-237</a>`,
      ],
      level: "Easy",
      category: "Sleep",
    }),

    //Q42
    Question_Answer.create({
      question: `A 60-year-old patient presents with a 2.5cm lung nodule located in the peripheral region of the right lower lobe. You suspect lung cancer. Patient is refusing CT guided biopsy. Which of the following is the most located cancer in the periphery of the lung?`,
      questionImage: [],
      answerOptions: [
        `Adenocarcinoma`,
        `Squamous cell carcinoma`,
        `Small cell carcinoma`,
        `Large cell undifferentiated carcinoma`,
      ],
      correctAnswer: `Adenocarcinoma`,
      explanation: `Adenocarcinoma is commonly peripheral and represents about 30% of the total number of lung cancer cases. Its incidence is rising especially in females.

          Adenocarcinoma frequently present as an incidental finding on x-ray.  Other major histological types of lung cancer tend to have central localization and are as follows:

          Squamous carcinoma is 80% central.  If in periphery, they tend to have cavitation

          Small Cell carcinoma originates from the neuroendocrine cells of the bronchial mucosa. It is usually central with mediastinal involvement

          Large cell undifferentiated carcinoma often develops on the outer regions of the lungs. They tend to grow rapidly and spread more aggressively than other kinds of lung cancer.

          Bronchoalveolar carcinoma is a variant of adenocarcinoma that rises from Type II pneumocytes in the alveoli. They usually present as solitary or multiple nodules and stimulate pneumonia with infections and asthma.
          `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/27261908/" target="_blank">Zheng M. Classification and Pathology of Lung Cancer. Surg Oncol Clin N Am. 2016 Jul;25(3):447-68</a>`,
      ],
      level: "Easy",
      category: "Lung Cancer",
    }),

    //Q43
    Question_Answer.create({
      question: `Asplenia is an in important risk factor for serious infections in infants < 6 months old?`,
      questionImage: [],
      answerOptions: [
        `Capnocytophaga canimorsus.`,
        `Capnocytophaga cynodegmi.`,
        `Babesia.`,
        `E. coli.`,
      ],
      correctAnswer: `E. coli.`,
      explanation: `Patients with asplenia are at a greater risk of fatal septicemia. The risk of post splenectomy infection is unpredictable and related to:
        a) indications for splenectomy (health trauma patients, hereditary spherocytosis
        b) age (child <5 years)
        c) time since surgery (high risk in 1st year after surgery)
        Impaired clearance of bacteria from bloodstream and humoral immune deficiency (low IgM) are common reasons for high risk for infections in asplenic patients. E. coli and Klebsiella bacteria are commonly seen in infants < 6 months old. Capnocytophaga canimorsus and Capnocytophaga cynodegmi are common after animal bites and babesia is common after tick bite. Asplenic patients who develop fever should be started on empirical antibiotic therapy immediately. Patients are vaccinated against pneumococcus, Haemophilus influenzae type B, influenza virus and meningococcal. Giving prophylactic antibiotics for the first two years after surgery is also recommended therapy for children >5 years and adults.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/25054718/" target="_blank">Rubin L.G. Schaffner W.  Care of the Asplenic patient.  NEJM 2014 371 (4) 349-356.</a>`,
      ],

      level: "Moderate",
      category: "Infection",
    }),

    //Q44
    Question_Answer.create({
      question: `A College student is admitted with a history of Fever and Bilateral infiltrates. His laboratory examination reveals Hg of 10 gm/dl. Further work up establishes presence of Autoimmune Hemolytic Anemia caused by cold reacting antibodies. Which of the following organisms is associated with this condition?`,
      questionImage: [],
      answerOptions: [
        `Coccidioidomycosis`,
        `Cryptococcosis`,
        `Mycoplasma Pneumoniae`,
        `Streptococcus Pneumoniae`,
      ],
      correctAnswer: `Mycoplasma Pneumoniae`,
      explanation: `Cold agglutinin disease is a form of autoimmune hemolytic anemia caused by cold-reacting autoantibodies. Autoantibodies bind to the erythrocyte membrane leading to premature erythrocyte destruction (hemolysis) characterize autoimmune hemolytic anemia. The primary cold agglutinin disease is associated with monoclonal cold reacting antibodies. However, secondary cold reacting antibodies which are seen with Mycoplasma pneumoniae infection are polyclonal in nature.
        Cold agglutinins can be seen in infections with Mycoplasmas Pneumoniae, Infectious Mononucleosis, and viral infections like Influenza virus and HIV infection.
        The family Mycoplasmataceae contains two genera that infect humans: Mycoplasma and Ureaplasma, which are usually referred to collectively as mycoplasmas. Only four Mycoplasma Species are recognized as human pathogens;
        Mycoplasma pneumoniae- Atypical Pneumonia,
        Mycoplasma hominis, - cause Pyelonephritis, Pelvic inflammatory disorder
        Mycoplasma genitalium and Ureaplasma urealyticum both caus non gonococcal urethritis
        Mycoplasmas are the smallest free-living bacteria. The mycoplasmas are facultative anaerobes, except for M. pneumoniae, which is a strict aerobe. A characteristic feature that distinguishes the mycoplasmas from other bacteria is the lack of a cell wall which explains why they are resistant to penicillins and cephalosporins.  The mycoplasmas are extracellular pathogens that adhere to epithelial cell surfaces.  Mycoplasma Pneumonia is spread by close contact via aerosolized droplets and thus is most easily spread in confined populations (e.g., families, schools, and army barracks). The disease is primarily one of the young individuals. Treatment is with Macrolides, tetracyclines or Fluoroquinolones.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5997415/" target="_blank">Bajantri B., Venkatrm S, Fuentesa GD, Mycoplasma pneumoniae: A Potentially Severe Infection;J Clin Med Res. 2018 Jul; 10(7): 535–544.</a>`,
      ],
      level: "Moderate",
      category: "Infection",
    }),

    //Q45
    Question_Answer.create({
      question: `Which of the following is most likely to improve hypoxemia in hepatopulmonary syndrome?`,
      questionImage: [],
      answerOptions: [
        `Administer supplemental O2`,
        `Administer diltiazem`,
        `Administer ibuprofen`,
        `Liver transplantation`,
      ],
      correctAnswer: `Liver transplantation`,
      explanation: `Hepatopulmonary syndrome (HPS) is a triad of hypoxemia, liver disease and intrapulmonary vascular dilatations. Mortality can be due to complications of underlying liver diseases such as hepatic failure, organ failure due to sepsis, hepatocellular cancer and bleeding in the GI tract.

        HPS is due to vascular dilations causing vascular mediators from the liver to enter into the lungs. This leads to remodeling of pulmonary vessels. There is an increased nitric oxide production which leads to vasodilation and increased carbon monoxide.

        The only definitive intervention for patients with HPS is liver transplantation which is usually reserved for serve HPS. Partial pressure of oxygen (PaO2) <60 mmHg should be evaluated for liver transplantation. It reverses hypoxemia in about 85% of cases.

        Administering supplemental O2 has been attempted to improve gas exchange and decrease hypoxemia but there is no effective therapy for HPS. Oxygen therapy can improve conditions related to intrapulmonary vascular shunts (dyspnea, desaturation, fatigue) which patients with HPS.

        Patients with mild to moderate HPS can be monitored with observation every 6 to 12 months using pulse oximetry.
        `,
      explanationImage: [],
      explanationLinks: [],
      level: "Moderate",
      category: "Pulmonary Vascular Disease",
    }),

    //Q46
    Question_Answer.create({
      question: `Which statement about pulmonary oxygen toxicity is true?`,
      questionImage: [],
      answerOptions: [
        `The histopathologic finding are specific for that condition`,
        `Can result in massive Pulmonary Hemorrhage`,
        `FiO2  < 0.6 been shown to be toxic`,
        `Hyperoxia can result in absorption atelectasis`,
      ],
      correctAnswer: `Hyperoxia can result in absorption atelectasis`,
      explanation: `Extended exposure to above-normal oxygen partial pressures, or shorter exposures to very high partial pressures, can cause oxidative damage to cell membranes leading to the collapse of the alveoli in the lungs . Hydroxyl radical (OH), Hydrogen peroxide (H2O2) and superoxide radical (O2) are produced by stepwise reduction of O2 to water to form oxygen free radicals (OFR).
        Oxygen toxicity causes cell membrane damage resulting in increased cell permeability. Lysosomal membrane damage releases proteolytic enzymes leading to inactive cell enzymes, DNA damage and recruitment of neutrophils. Pulmonary capillary endothelial and alveolar epithelial cells are targets for (OFR) resulting in injury-induced lung edema, flooding of alveolar, hemorrhage, and deposits of collagen, elastin and hyaline membrane formation.  However these pathological findings are nonspecific and can be seen in many other disorders. Oxygen is toxic to lungs when high FIO2 (>0.60) is administered over >24 hours at normal barometric pressure. A high concentration of oxygen displaces nitrogen in the alveoli and the oxygen in alveoli may be absorbed, reducing alveolar volume. Thus hypoxia can result in absorption atelectasis which could result in increased physiological shunting and hypoxemia.
        `,
      explanationImage: [],
      explanationLinks: [],
      level: "Hard",
      category: "Other Pulmonary Diseases",
    }),

    //Q47
    Question_Answer.create({
      question: `All the following are effective in preventing or treating the acute chest syndrome, except:`,
      questionImage: [],
      answerOptions: [
        `Incentive spirometry`,
        `Hydration`,
        `Supplemental oxygen`,
        `Plasmapheresis`,
      ],
      correctAnswer: `Plasmapheresis`,
      explanation: `Appropriate therapy for acute chest syndrome (ACS) is needed to prevent rapid decline and multiorgan failure. Pain is controlled with parenteral opioids.

        Fluids should be administered to prevent hypovolemia.

        The mainstay of acute treatment of acute chest syndrome is red blood cell transfusions. The need for transfusion depends on severity and progression of the disease. Transfusions are given to improve oxygenation in ACS and when the hemoglobin is 10% to 20% below baseline.

        Exchange transfusions are used in severe cases of ACS which patients present with hypoxemia, multilobar disease on imaging or failure of blood transfusions. The goal of RBC exchange is to increase hemoglobin to 10 and decrease HbS to less than 30%.

        Incentive spirometry is used to prevent acute chest syndrome episodes in children with sickle cell disease and those who are admitted in the hospital with a painful crisis. It is recommended 10 maximal breaths every 2 hours can prevent ACS during vaso-occlusive pain episodes.

        Supplemental oxygen should be delivered to patients with low oxygen saturation (SaO2) or low partial pressure (PaO2).

        Plasmapheresis will not help to improve the patient hemoglobin hence it will not be helpful for in patients with acute chest syndrome
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/7637747/" target="_blank">Bellet PS. Incentive spirometry to prevent acute pulmonary complications in sickle cell diseases.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/7637747/" target="_blank">N Engl J Med 1995; 333:699-703</a>`,
      ],
      level: "Moderate",
      category: "Other Pulmonary Diseases",
    }),

    //Q48
    Question_Answer.create({
      question: `Which of the following is the mechanism of action of sildenafil used as a medical therapy in pulmonary arterial hypertension?`,
      questionImage: [],
      answerOptions: [
        `Phosphodiesterase 5 inhibitor`,
        `Nitric oxide synthase inhibitor`,
        `Phosphodiesterase 4 inhibitor`,
        `Guanylate cyclase inhibitor`,
      ],
      correctAnswer: `Phosphodiesterase 5 inhibitor`,
      explanation: `The ability of sildenafil in PAH relies upon the inhibition of PDE-V.  This reduces cyclic guanosine monophosphate degradation with resultant reductions in pulmonary smooth muscle cytoplasmic calcium levels causing vasodilation.  This relieves the elevated arterial pressures of PAH and reduces the progression of PAH associated pathology.  Sildenafil is a selective and potent inhibitor of PDE type 5 which specifically degrades cyclic guanosine monophosphate and is found in high concentrations in pulmonary arteries and the corpora cavernosum.  Normally, endothelium-derived NO stimulates intracellular soluble guanylate cyclase resulting in increased levels of cGMP, which then acts to mediate smooth muscle relaxation (Figure 1). Sildenafil inhibits the degradation of cGMP by PDE 5 and prolongs the actions of cGMP.  Metabolism of sildenafil occurs primarily by hepatic cytochrome P450 enzymes yielding one active metabolite with a potency of approximately 50% of the parent drug.  Patients with age greater than 65, with creatinine clearance less than 30, and with hepatic cirrhosis have reduced clearance of sildenafil `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1994020/" target="_blank">Barnett C, Machado R. Sildenafil in the treatment of pulmonary hypertension. VascHealth Risk Manag.
            2006;2(4):411-22.</a>`,
      ],
      level: "Easy",
      category: "Pharmacology",
    }),

    //Q49
    Question_Answer.create({
      question: `TNF inhibitors have become widely used for their immunosuppressive properties over the last few years. They are used in all fields of medicine from Rheumatology, Gastroenterology, Dermatology and many more.  However, they are not without risks. Which of the following TNF Inhibitors pose the greatest risk of recrudescence of tuberculosis?`,
      questionImage: [],
      answerOptions: [
        `Infliximab (Remicade)`,
        `Etanercept (Enbrel)`,
        `Adalimumab (Humira)`,
        `Certolizumab pegol (Cimzia)`,
      ],
      correctAnswer: `Infliximab (Remicade)`,
      explanation: `Patients on anti-TNF therapy are at a higher risk of infection, ranging from minor to life-threatening bacterial infections, and including the reactivation of granulomatous and fungal infections. More importantly, these agents are similar to steroids in blunting signs of infection, which may delay diagnosis and treatment.

        The management of infection in patients on anti-TNF medications varies from case to case. In general, patients with a minor infection that does not require hospitalization or intravenous antibiotics can continue the biologic therapy while taking oral antibiotics. TNF inhibitors must be held in the event of a major infection.

        Consultation with an infectious disease specialist is recommended, especially in complex cases.

        Granulomatous Infections such as Tuberculosis

        Anti-TNF agents increase the risk of de novo granulomatous infections and of reactivating such infections. Granuloma formation and intracellular destruction of mycobacteria depend on TNF. TNF is important in maintaining the anatomic integrity of granulomas where these organisms have been sequestered, and blocking TNF leads to breakdown of granulomas and release of virulent organisms.

        TNF inhibitors increase the risk of reactivation of latent tuberculosis infection. The risk is greater with infliximab and adalimumab than with etanercept, and it has been described with certolizumab. Study results are varied thus far but show a risk of tuberculosis reactivation five to 30 times higher than in the general population, with tremendous variability in risk depending on background rates of previous exposure.

        The absence of typical tuberculosis symptoms further complicates care in these cases. Fever, weight loss, and night sweats tend to be TNF-mediated and are therefore masked by anti-TNF agents, leading to atypical presentations. In addition, active tuberculosis infection associated with TNF inhibitors is more likely to involve extrapulmonary sites such as the skin and musculoskeletal system and to be disseminated at presentation.

        A paradoxical worsening of tuberculosis symptoms may also be seen in patients with latent tuberculosis reactivation, especially after discontinuing anti-TNF therapy. This is thought to result from an immune reconstitution inflammatory syndrome. The pretreatment evaluation should include a history of risk factors, a physical examination, and either a tuberculin skin test or an interferon-gamma-release assay. Interferon- gamma-release assays are particularly helpful in patients who have received bacille Calmette-Guérin vaccination. In patients who test positive or have been exposed, tuberculosis treatment should begin 4 weeks before starting anti-TNF therapy, though the optimal timing of antituberculosis agents is still controversial.

        If tuberculosis develops in a patient on anti- TNF therapy, he or she should receive antituberculosis drugs. Anti-TNF therapy should be stopped and should be resumed after 2 months only if no other treatment option is available.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/24493494/" target="_blank">Hadam J, Aoun E, Clarke K, Wasko MC. Managing risks of TNF inhibitors: An update for the internist. Cleve Clin J Med. 2014 Feb;81(2):115-27.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/12905464/" target="_blank">Gómez-Reino JJ, Carmona L, Valverde VR, Mola EM, Montero MD; BIOBADASER Group. Treatment of rheumatoid arthritis with tumor necrosis factor inhibitors may predispose to significant increase in tuberculosis risk: a multicenter active-surveillance report. Arthritis Rheum 2003; 48:2122–2127.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/11596589/" target="_blank">Keane J, Gershon S, Wise RP, et al. Tuberculosis associated with infliximab, a tumor necrosis factor alpha-neutralizing agent. N Engl J Med 2001; 345:1098–1104.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/19218645/" target="_blank">Demkow U, Broniarek-Samson B, Filewska M, et al. Prevalence of latent tuberculosis infection in health care workers in Poland assessed by interferon-gamma whole blood and tuberculin skin tests. J Physiol 2008; 59(6):209-17</a>`,
      ],
      level: "Moderate",
      category: "Pharmacology",
    }),

    //Q50
    Question_Answer.create({
      question: `Which of the following is true about treatment for malignant pleural mesothelioma (MPM)?`,
      questionImage: [],
      answerOptions: [
        `Pleurectomy-Decortication plus adjuvant treatment`,
        `Pleurectomy only`,
        `CT and or RT`,
        `There has been no ideal treatment found for MPM`,
      ],
      correctAnswer: `here has been no ideal treatment found for MPM`,
      explanation: `Malignant pleural mesothelioma presents difficulties in obtaining an early diagnosis. It is a malignant tumor with a very poor prognosis. The cure is not achieved with radical surgery (pleuropneumonectomy) alone so liberation of the tumor mass with pleurectomy/decortication combined with chemo- or radiation therapy (multimodal treatment) has been gaining popularity. If surgery is not feasible, chemotherapy (a combination of pemetrexed and platinum-derived compounds) with pleurodesis or a tunneled pleural drainage catheter, if control of pleural effusion is required, can be considered. Radiation therapy is reserved for treatment of pain associated with infiltration of the chest wall or neighboring structures. Hence, there is no one ideal treatment for this disease.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/25059587/" target="_blank">Rodríguez Panadero F. Diagnosis and Treatment of Malignant Pleural Mesothelioma. Arch Bronconeumol. 2015;51(4):177–184).</a>`,
      ],
      level: "Moderate",
      category: "Pleural Diseases",
    }),

    //Q51
    Question_Answer.create({
      question: `Which is true regarding the chest wall tumors?`,
      questionImage: [],
      answerOptions: [
        `Malignant tumors are more frequent than the benign tumors`,
        `Female and male are affected equally`,
        `Radiation is the main cause`,
        `Leiomyosarcoma is the most frequent rib tumor`,
      ],
      correctAnswer: `Malignant tumors are more frequent than the benign tumors`,
      explanation: `Tumors of the chest wall can arise from any soft tissue or bony structure. Primary chest wall tumors arise from muscle, fat, blood vessel, nerve sheath, cartilage, or bone of the chest wall. Secondary chest wall tumors arise from direct invasion of breast carcinoma or lung carcinoma or metastases from a distant site. Up to 50 to 80% of chest wall tumors are malignant, and 55% of these arise from bone or cartilage and 45% from soft tissue. Primary chest wall leiomyosarcoma is a rare, malignant soft-tissue tumor. It most commonly affects the extremities.

        The female or male preponderance is not very clear. Desmoid tumors are aggressive fibromatosis that develop at the site of a previous thoracotomy.
        Radiation-associated malignant tumors of the chest wall are uncommon.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3140237/" target="_blank">David EA, Marshall MB. Review of chest wall tumors: a diagnostic, therapeutic, and reconstructive challenge. Semin Plast Surg. 2011;25(1):16-24.</a>`,
        `<a href="https://www.ncbi.nlm.nih.gov/books/NBK539908/" target="_blank">Bajaj T, Aboeed A. Chest Wall Tumors. [Updated 2020 Jun 27]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; Jan 2020.</a>`,
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8776346/" target="_blank">Shikhare S. Primary chest-wall leiomyosarcoma: a rare mimic of a malignant rib lesion. CSO 2016;14(10):431-433.</a>`,
      ],
      level: "Easy",
      category: "Other Pulmonary Diseases",
    }),

    //Q52
    Question_Answer.create({
      question: `Which statement is correct regarding tuberculosis?`,
      questionImage: [],
      answerOptions: [
        `Lung surgery is frequently indicated for active tuberculosis`,
        `There is a correlation between lung cancer and previous tuberculosis`,
        `Post TB bronchiectasis can be treated with surgery`,
        `Most common antitubercular drug causing hepatitis toxicity is INH`,
      ],
      correctAnswer: `Most common antitubercular drug causing hepatitis toxicity is INH`,
      explanation: `Lung surgery in TB is indicated to support the diagnosis and treatment of only the most complex cases to improve their therapeutic outcomes. Surgical intervention is required for
        a.	elimination of contagious persisting tubercular cavities despite appropriate chemotherapy
        b.	treatment of the destroyed lung
        c.	Tuberculoma resection
        d.	Tuberculous pleural empyema treatment

        The most common TB medication that causes hepatitis is INH.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4958807/" target="_blank">Subotic D, Yablonskiy P, Sulis G et al. Surgery and pleuro-pulmonary tuberculosis: a scientific literature review. J Thorac Dis 2016;8(7):E474-E485.</a>`,
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5887688/" target="_blank">Keikha M, Esfahani BN. The Relationship between Tuberculosis and Lung Cancer. Adv Biomed Res. 2018 Mar 27;7:58.</a>`,
      ],
      level: "Easy",
      category: "Infection",
    }),

    //Q53
    Question_Answer.create({
      question: "A strong risk factor for malignancy in a SPN is",
      answerOptions: [
        "Presence of calcium deposits in the lesion",
        "Calculated doubling time of less than 30 days",
        "A SUV of less than 2.5 on PET scan",
        "A spiculated border on CT scan",
      ],
      questionImage: [],
      correctAnswer: `A spiculated border on CT scan`,
      explanation: `Benign solitary pulmonary nodules lesions have regular, smooth edges, while typical malignant nodules usually have lobulated, spiculated or irregular edges. Lobulation is associated with a greater risk for malignant pulmonary nodules than spiculation. The greatest risk factor for malignant SPNs was an edge characterized by lobulation and spiculation.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5438732/" target="_blank">Yang L, Zhang Q, Bai L, Li TY, He C, Ma QL, Li LS, Huang XQ, Qian GS. Assessment of the cancer risk factors of solitary pulmonary nodules. Oncotarget. 2017 Apr 25;8(17):29318-29327.</a>`,
      ],
      level: "Easy",
      category: "Lung Cancer",
    }),

    //Q54
    Question_Answer.create({
      question:
        "In the event of exsanguinating hemorrhage from an airway lesion during rigid bronchoscopy, the most efficient way of stopping the hemorrhage is:",
      answerOptions: [
        "Cryotherapy",
        "Arrange for emergency",
        "Platelet transfusion",
        "Bleeding site tamponade done with a balloon-tipped vascular catheter",
      ],
      questionImage: [],
      correctAnswer: `Bleeding site tamponade done with a balloon-tipped vascular catheter`,
      explanation: `Initial salvage treatment of an exsanguinating hemorrhage from an airway lesion during rigid bronchoscopy should involve the following steps:

        Step 1:  Rigid bronchoscope wedged into the hemorrhaging bronchus
        Step 2: Bleeding site tamponade done with a balloon-tipped vascular catheter
                     Step 3:  Bronchoscope removed, and patient intubated with a double-lumen tube
                     Step 4: Arrange Emergency definitive surgery
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC471410/" target="_blank">Maguire MF, Berry CB, Gellett L, Berrisford RG. Catastrophic haemoptysis during rigid bronchoscopy: a discussion of treatment options to salvage patients during catastrophic haemoptysis at rigid bronchoscopy. Interact Cardiovasc Thorac Surg. 2004;3(2):222-225.</a>`,
      ],
      level: "Hard",
      category: "Other Pulmonary Diseases",
    }),

    //Q55
    Question_Answer.create({
      question:
        "Nocturnal leg cramps are a common phenomenon and are often considered to be idiopathic. The precise mechanism of leg cramps is still unknown, but several theories have been suggested. Which of the following is not considered part of the differential diagnosis in nocturnal leg cramping?",
      answerOptions: [
        "Claudication",
        "Peripheral neuropathy",
        "Restless Leg Syndrome",
        "Cardiovascular Accident (Stroke)",
      ],
      questionImage: [],
      correctAnswer: `Cardiovascular Accident (Stroke)`,
      explanation: `The precise mechanism of leg cramps is unknown, but several myopathic, neurologic, and metabolic causes have been suggested. Most cases of leg cramps are idiopathic.

        Electromyographic studies suggest that leg cramps originate in the lower motor neurons with hyperactive, high-frequency, involuntary nerve discharge.  Some scientists hypothesize that our “civilized” lifestyle no longer requires repetitive squatting that stretches the leg tendons and muscles.  Others have suggested that in the nocturnal recumbent position, the foot is passively in plantar flexion and the calf muscle fibers are already maximally shortened, so uninhibited nerve stimulation leads to cramping.

         Exercise research suggests that muscle fatigue is a primary cause of leg cramps. Studies of endurance athletes show that a higher-than-normal intensity of exercise is associated with leg cramps.  The mechanism of this association remains unclear. Nerve dysfunction or damage has been suggested as a cause of leg cramps because of the high prevalence in patients with neurologic conditions such as parkinsonism. Metabolic causes are suggested by the high prevalence in patients undergoing hemodialysis that is associated with hyperphosphatemia, but not with hyper- or hypocalcemia. Patients with low parathyroid hormone levels who are undergoing hemodialysis have a lower-than expected incidence of leg cramps.

        Neither exercise-related cramps nor nocturnal cramps have been associated with hypovolemia (caused by dehydration) or disturbances of electrolytes such as potassium, sodium and magnesium. One study of patients with nonalcoholic cirrhosis demonstrated that leg cramps are not related to changes in the levels of creatinine, calcium, magnesium, sodium, potassium, zinc, glucose, alanine transaminase, total bilirubin, or albumin.

        Muscle cramps are reported as an adverse effect for hundreds of medications, but only a few are specific to the legs. Medication related leg cramps are most commonly associated with intravenous iron sucrose, conjugated estrogens, raloxifene (Evista), naproxen (Naprosyn), and teriparatide (Forteo), although the overall incidence is very low (Table 1).11 Leg cramps also have been reported in studies of medications such as clonazepam (Klonopin), citalopram (Celexa), celecoxib (Celebrex), gabapentin (Neurontin), and zolpidem (Ambien), which, ironically, are used to treat leg cramps. A recent study found an association between leg cramps and the use of quinine in the year following new prescriptions for diuretics, statins, and inhaled long acting beta2 agonists. However, the study was complicated by worsening disease states (such as vascular disease) and by increased patient-physician contact. Diuretics, such as hydrochlorothiazide, are commonly believed to cause leg cramps secondary to electrolyte abnormalities, but they have not been implicated in evidence-based reviews.

        Several medical conditions are associated with leg cramps. A study of outpatient veterans reported leg cramps in 75 percent of those with peripheral vascular disease, 63 percent of those with hypokalemia, and 62 percent of those with coronary artery disease. About 60 percent of patients with cirrhosis reportedly have leg cramps, most of whom are older patients with advanced disease. Leg cramps have been linked to neurologic diseases such as parkinsonism and peripheral neuropathy. Lumbar canal stenosis also is associated with leg cramps.  Nerve damage from cancer treatment may be a cause of leg cramps, with a small study demonstrating that leg cramps were present in 82 percent of patients with cancer.  Hemodialysis is linked to cramps, but chronic kidney disease is not. Venous insufficiency is also linked to leg cramps, but research has not demonstrated that cramps are caused by tissue hypoxia or toxic metabolites, and treatment of venous insufficiency has not been shown to relieve cramps. Pregnancy historically has been associated with leg cramps, although it is Difficult to differentiate pregnancy itself as the primary cause as opposed to venous insufficiency. 
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/22963024/" target="_blank">Allen RE, Kirby KA. Nocturnal leg cramps Am Fam Physician. 2012 Aug 15;86(4):350-5. Nocturnal Leg Cramps</a>`,
      ],
      level: "Hard",
      category: "Sleep",
    }),

    //Q56
    Question_Answer.create({
      question:
        "There are many causes of Chronic Obstructive Pulmonary Disease (COPD), some of them being smoking, occupational exposure, air pollution and genetics. The genetic component is centered on alpha-1 antitrypsin deficiency (AATD). Which of the following does not pertain to the AATD pathophysiology?",
      answerOptions: [
        "This mutation is the result of a single amino acid mutation at position 342 (glu --> lys)",
        "The resulting COPD is panlobular and not centrilobular",
        "The mechanism of lung tissue destruction is due to an imbalance in the proteinase and anti- proteinase",
        "Lymphocytes are the primary cause of destruction of lung tissue in AATD",
      ],
      questionImage: [],
      correctAnswer: `Lymphocytes are the primary cause of destruction of lung tissue in AATD`,
      explanation: `Alpha 1-Antitrypsin (AAT) is a classic proteinase inhibitor, and the relationship of deficiency suggests that the destructive process leading to emphysema was driven by an enzyme(s) normally controlled by AAT. By the mid-1970s, the concept that it was destruction of lung elastin central to the process led to the demonstration that elastase from the neutrophil was the likely culprit. 7 Indeed, AAT has the greatest affinity for this enzyme, rapidly inactivating it, and this led to substantiation of the proteinase/antiproteinase theory of emphysema. Release of elastase by migrating neutrophils was assumed to cause the damage to elastin and the development of emphysema. Since these cells represent a key component of the lung defenses, this concept is consistent with both the age-related changes in “healthy individuals” and the accelerated changes in AATD. The next logical step, therefore, was to enhance the protection of the lung by augmentation of the low levels of AAT toward a normal or “protective” level. In the 1980s, purification of AAT from human plasma was shown to be feasible, and weekly infusions boosted the levels of AAT to those believed to be protective, leading to the belief that the problem/disease was resolved.

        Studies carried on with the identification of the gene and its chromosomal location and an understanding of the genetic defect resulting in the common severe deficiency gene (the Z phenotype). The point mutation resulted in a single amino acid change at position 342 (glu to lys). However, multiple, though less frequent, defects became recognized, including other point mutations, insertions, and deletions resulting in premature stop codons and even gene deletion. At this time, lung disease led to genetic disease monitoring.

        The link between AATD and emphysema established the proteinase/antiproteinase
        balance as the important mechanism of lung tissue destruction. This led to studies of AAT and its phenotypes to determine whether this was a more general feature. However, most patients with COPD had normal serum levels of AAT, and so alternative mechanisms resulting in uncontrolled proteinase activity in the lung were sought. As the structure/function knowledge of AAT grew, it became recognized that the amino acid at position 358 was critical for its function. In normal AAT this is methionine, which gives the protein its specificity for interaction with the catalytic triad of serine proteinases, especially neutrophil elastase (NE). The only other naturally occurring active site variant identified had arginine at this site changing the protein into an antithrombin. No such active site variants were found in COPD, but experiments showed that cigarette smoke oxidized the normal methionine, reducing the inhibition of NE 2,000-fold. Initial lung lavage studies demonstrated a reduction in AAT function in healthy smokers and
        evidence of oxidized methionine residues, adding credence to the theory that usual COPD emphysema was also due to a proteinase/antiproteinase imbalance due to cigarette
        smoke induction of functional AATD.

        For some years it has been recognized that neutrophils from patients with COPD have increased chemotactic response and destructive capability, increased adhesion and spontaneous migration under flow conditions, and a chaotic chemotactic migration pathway. The latter two studies were consistently different from matched patients with AATD (overcoming any effects secondary to the presence and severity of airflow obstruction and treatment) and probably reflect abnormal signaling through PI3K. Studies of early emphysema, preceding the development of airflow obstruction, highlighted local neutrophilic inflammation present in BAL.  More recently, PET CT scanning highlighted an enhanced neutrophil signal in usual COPD localized to where the emphysema occurs (the apices) compared with subjects with AATD in whom the signal was normal. Since the release of proteinases by an activated neutrophil exceeds the inhibitory capacity of even normal concentrations of active AAT.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/24297124/" target="_blank">Stockley RA. α1-Antitrypsin Deficiency: What Has It Ever Done for Us? Chest. 2013;144(6):1923-1929.</a>`,
      ],
      level: "Hard",
      category: "Chronic Obstructive Pulmonary Disease",
    }),

    //Q57
    Question_Answer.create({
      question: `A 40-year HIV positive male is admitted to hospital for fever, chills, cough, shortness of breath and weight loss for the past two days.   The cough and shortness of breath started two weeks ago and has gotten worse in the past few days.  On physical examination, the patient was tachypneic, tachycardic with mild crackles.  Patient is on HAART since he was diagnosed 2 years ago.  CD 4 count is <200 and CT scan done in the ER showed diffuse  opacities.  Patients have an A-a gradient >45mmHg.  Which of the following is the treatment of choice for this patient if he is allergic to Sulfa drugs?`,
      questionImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q57/Q57+img1.png`,
      ],
      answerOptions: [
        `Trimethoprim-sulfamethoxazole (TMP-SMX)`,
        `Pentamidine`,
        `Rifampin`,
        `Amphotericin.`,
      ],
      correctAnswer: `Pentamidine`,
      explanation: `Pneumocystis carinii pneumonia (PCP) is an opportunistic infection common in immunocompromised patients such as HIV patients.  Defective T-Cell immunity, with CD4 count < 200 per mm2 is primary risk factor for PCP.    Patients present with classic triad of fever, exertional dyspnea and nonproductive cough.  Physical exam reveals fine dry rales.   Diagnosis can be confirmed by chest x-ray which shows diffuse interstitial pulmonary infiltrates along with a blood gas analysis that shows hypoxemia.  [A-a] gradient of more than 45 indicates severe prognosis.  PCP is diagnosed routinely with sputum induction and bronchoalveolar lavage with methenamine silver stain. Hospitalized patients receive IV therapy and switched to oral treatment; however mild cases can be treated with oral therapy from the outset.  The primary drug of choice for treatment and prophylaxis is trimethoprim-sulfamethoxazole (TMP-SMX), but alternatives may be needed because of adverse effects, poor response or allergy to Sulfa containing drugs.  Pentamidine is used in patients who are allergic to TMP-SMX or can’t tolerate it.  It is less effective compared to TMP-SMX.  Serious adverse effects include nephrotoxicity, hyperglycemia or hypoglycemia, pancreatitis and torsade de pointes.  Therefore, it is important to monitor glucose levels, QT prolongation and creatinine.  Other drugs available include Clindamycin plus primaquine, Atovaquone and Dapsone.  Adjunctive corticosteroid therapy within the first 72 hours improves survival in moderate to severe cases.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/10537385/" target="_blank">Wilkin, A.  J. Feinberg.  Pneumocystis carinii Pneumonia: A Clinical Review.  Am Fam Physician. 1999 Oct 15;60(6):1699-1708.</a>`,
      ],
      level: "Hard",
      category: "Infection",
    }),

    //Q58
    Question_Answer.create({
      question: `When B lines are seen in all lung fields, this suggests the possibility of all the following except:`,
      answerOptions: [
        `ARDS`,
        `Cardiogenic Pulmonary Edema`,
        `PCP Pneumonia`,
        `Status Asthmaticus`,
      ],
      questionImage: [],
      correctAnswer: `Status Asthmaticus`,
      explanation: `Pulmonary edema is defined as abnormal accumulation of extravascular fluid in the lung [1]. The most common cause of pulmonary edema is renal or cardiac insufficiency. On radiograph imaging patients with pulmonary congestion, B lines can be seen which represents interlobular septal thickening.

        ARDS is syndrome where signs and symptoms of pulmonary edema occur in absence of elevated pulmonary venous pressure. B lines generate an image as “white lung” which shows a typical pattern as wet lungs [2].

        In all the choices above, status asthmaticus do not show B lines and instead would show hyperinflation.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/31476240/" target="_blank">Loebelenz LI. Kerley B lines in the lung apex- a distinct CT sign for pulmonary congestion. Swiss Med Wkly 2019, 149:w20119</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/24247614/" target="_blank">Corradi F. Chest ultrasound in acute respiratory distress syndrome. Curr Crit Care 2014; 20(1):98-103</a>`,
      ],
      level: "Easy",
      category: "Other Pulmonary Diseases",
    }),

    //Q59
    Question_Answer.create({
      question: `A 72-year-old man with a 15-year history of COPD presents to the clinic. His current COPD therapy consists of a LABA/LAMA combination.  He has very severe COPD, with a forced expiratory volume in 1 second value of 30% of what was predicted one years ago. During the visit, he mentions that he is adherent to his treatment regimen, and he shows appropriate use of his inhaler device. He has had 3 exacerbations in the past year. Which of the following is the next best step for this patient?`,
      answerOptions: [
        `Add an oral corticosteroid to his current treatment plan`,
        `Add an inhaled corticosteroid (ICS) to his current treatment plan`,
        `Change his inhaler device`,
        `Add Roflumilast to his current treatment regimen`,
      ],
      questionImage: [],
      correctAnswer: `Add an inhaled corticosteroid (ICS) to his current treatment plan`,
      explanation: `This patient demonstrates correct inhaler technique; thus, ruling out error with inhaler as a cause of this patient’s worsening COPD symptoms. Adding an oral CS or starting him on a methylxanthine are not recommended due to a number of adverse events and treatment related toxicity. The Global Strategy for the Diagnosis, Management, and Prevention of COPD guidelines suggest adding an inhaled corticosteroid (ICS) to LAMA/LABA treatment if symptoms persist. This triple therapy has shown improvement in COPD symptoms and lung function compared with monotherapy or ICS/LABA therapy.

        Roflumilast is a PDE4 inhibitor with demonstrated efficacy for improving lung function and decreasing exacerbations in patients with severe to very severe COPD associated with chronic bronchitis. This includes decreasing the incidence of exacerbations in frequent exacerbators and also of hospitalization. However, one would add inhaled corticosteroid before adding Roflumilast to the regimen.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2707800/" target="_blank">Montuschi P, Pharmacological treatment of chronic obstructive pulmonary disease; Int J Chron Obstruct Pulmon Dis. 2006 Dec; 1(4): 409–423.</a>`,
      ],
      level: "Moderate",
      category: "Chronic Obstructive Pulmonary Disease",
    }),

    //Q60
    Question_Answer.create({
      question: `A 21 year old swimmer is admitted with right sided primary spontaneous pneumothorax (PSP). He is 6 foot 4 inches and weighs 154 lbs, and denies any smoking history. He is treated with a small-bore chest tube drainage. Surgical treatment was discussed with the patient's family. All of the following are indications for definitive surgical treatment during the first episode of PSP except:`,
      answerOptions: [
        `Patients with a Prolonged Air Leak`,
        `Patients with a high-risk occupation (e.g. pilot, deep sea diver)`,
        `Patients with large, bilateral or life-threatening PSP in whom thoracostomy was required for management`,
        `Patients with a family history of PSP`,
      ],
      questionImage: [],
      correctAnswer: `Patients with a family history of PSP`,
      explanation: `Contrary to secondary spontaneous pneumothorax (SSP), most patients after a first episode of primary spontaneous pneumothorax (PSP), do not need to undergo a definitive procedure, because the likelihood of a recurrence is considered low and prolonged (persistent) air leaks (PALs) are unusual. Following the initial treatment of a first episode of PSP, a decision to treat with a definitive procedure (eg, pleurodesis with blebectomy) to prevent a recurrence needs to be made. There is general consensus among experts that only a  small population of patients with a first episode of PSP should be subjected to undergo a definitive procedure including:
    ●	Patients with a PAL (see 'Prolonged air leak' above)
    ●	Patients with a high-risk occupation (eg, airline pilot, deep sea diver) or hobby (eg, scuba diving)
    ●	Patients with large, bilateral, or life-threatening PSP in whom tube thoracostomy was required for management
    `,
      explanationImage: [],
      explanationLinks: [`<a href="" target="_blank">placeholder/no-ref</a>`],
      level: "Moderate",
      category: "Pleural Diseases",
    }),

    //Q61
    Question_Answer.create({
      question: `The most frequently identified infectious agent with subsequent development of Guillain-Barre syndrome is`,
      answerOptions: [
        `Campylobacter jejuni`,
        `Epstein-Barr virus`,
        `Varicella- Zoster virus`,
        `Mycoplasma pneumoniae`,
      ],
      questionImage: [],
      correctAnswer: `Campylobacter jejuni`,
      explanation: `The Guillain-Barre syndrome, which is characterized by acute areflexic paralysis with albuminocytologic dissociation (i.e, high levels of protein in the cerebrospinal fluid and normal cell counts). Two thirds of cases are preceded by symptoms of upper respiratory tract infection or diarrhea. The most frequently identified infectious agent associated with subsequent development of Guillain-Barre syndrome is Campylobacter jejuni. and is associated with  20% of cases of Miller Fisher syndrome. Other infectious agents with a well-defined relationship to the Guillain-Barre syndrome are Epstein-Barr virus, varicella-zoster virus, and Mycoplasma pneumoniae.

          The Guillain-Barre syndrome generally follows a monophasic course and typically does not recur, but two or more episodes have been reported in 7% of patients. The histologic features of the Guillain-Barre syndrome support a classification that includes demyelinating and axonal subtypes- acute inflammatory demyelinating polyneuropathy and acute motor axonal neuropathy. Infection with cytomegalovirus or Epstein- Barr virus is associated with the demyelinating Guillain- Barre syndrome, whereas C.jejuni infection is associated with the axonal Guillain-Barre syndrome and with Miller Fisher syndrome.

          The Miller Fisher syndrome appears to be more common among patients with the Guillain-Barre syndrome who live in eastern Asia than among those who live in other parts of the world, occurring in up to 20% of patients in Taiwan and 25% of patients in Japan.

          Gangliosides, which are composed of a ceramide attached to one or more sugars (hexoses) and contain sialic (N-acetylneuraminic acid) linked to an oligosaccharide core, are important components of the peripheral nerves. IgG autoantibodies to GM1 and GD1a are associated with acute motor axonal neuropathy and its more extensive and less extensive sand less extensive subtypes, acute motor-sensory axonal neuropathy and acute motor-conduction-block neuropathy, respectively, but not with acute inflammatory demyelinating polyneuropathy.

          Molecular mimicry between the bacterial and peripheral nerves components appear to elicit autoantibodies and induce the development of the axonal subtype of the Guillain-Barre syndrome or the Miller Fisher syndrome after enteritis with C.jejuni.

          Studies have shown that bacteria isolated from the patients with the Guillain-Barre syndrome bear GM1-like or GD1a-like lipooligosaccharide and those from patients with the Miller Fisher Syndrome have lipooligosaccharides mimicking GQ1b.

          Treatment with intravenous immune globulin, initiated within 2 weeks after disease onset, is reported to be about as effective as plasma exchange in patients with Guillain-Barre syndrome.
          `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/9665983/" target="_blank">Nachamkin I, Allos BM, Ho T, Campylobacter Species and Guillain-Barré Syndrome; Clin Microbiol Rev. 1998 Jul; 11(3): 555–567.</a>`,
      ],
      level: "Easy",
      category: "Infection",
    }),

    //Q62
    Question_Answer.create({
      question: `When to send to surgery in primary pneumothorax (PSP)?`,
      answerOptions: [
        `a second ipsilateral pneumothorax`,
        `first contralateral or simultaneous bilateral pneumothorax`,
        `first episode of tension pneumothorax`,
        `significant spontaneous hemothorax`,
      ],
      questionImage: [],
      correctAnswer: `significant spontaneous hemothorax`,
      explanation: `Observation and supplemental oxygen are generally the approach in clinically stable patients with first episode of primary pneumothorax (PSP) that are small and without severe symptoms. In the first episode of PSP, simple aspiration or pleural drainage are considered first line treatment. For patients with recurrent or persistent PSP, the most effective treatment for prevention is mechanical pleurodesis or pleurectomy performed by thoracotomy. Video-assisted thoracoscopic surgery (VATS) with talc (chemical pleurodesis) reduces relapses compared to mechanical pleurodesis.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2950234/" target="_blank">Luh S. Diagnosis and treatment of primary spontaneous pneumothorax; J Zhejiang Univ Sci B. 2010 Oct; 11(10): 735–744.</a>`,
      ],
      level: "Easy",
      category: "Pleural Diseases",
    }),

    //Q63
    Question_Answer.create({
      question: `Which of the following fungal infections produces oxalate crystals?`,
      answerOptions: [
        `Histoplasma capsulatum`,
        `Aspergillus niger`,
        `Coccidioides immitis`,
        `Blastomyces dermatitidis`,
      ],
      questionImage: [],
      correctAnswer: `Aspergillus niger`,
      explanation: `Aspergillus niger (A. niger) is regarded as an opportunistic pathogen.  It forms a fungal ball in the lungs that eventually grows.  Tracheobronchial aspergillosis presents in many different forms, invasive, ulcerative, or pseudomembranous.  It predominantly affects the immunocompromised hosts such as solid organ transplant recipients.  Patient on long term therapy with Itraconazole and patients with hypogammaglobulinemia can suffer from A. niger. Flexible bronchoscopy shows black pigments along with white masses of oxalate crystal. This fungal metabolite produced by A. niger can bind to airway calcium.  The drug of choice to treat A. niger is Voriconazole.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/24189863/" target="_blank">Tunsupon P, Panchabhai TS, Khemasuwan D, Mehta AC. Black bronchoscopy.  Chest. 2013 Nov 1;144(5):1696-706.</a>`,
      ],
      level: "Hard",
      category: "Infection",
    }),

    //Q64
    Question_Answer.create({
      question: `Which of the following inborn errors of metabolism would cause a hyperpigmentation of the airways?`,
      answerOptions: [
        `Phenylketonuria`,
        `Lesch-Nyhan Syndrome`,
        `Alkaptonuria`,
        `Gaucher’s Disease`,
      ],
      questionImage: [],
      correctAnswer: `Alkaptonuria`,
      explanation: `(Ochronosis) Alkaptonuria is a rare inborn error of metabolism involving the degradation of the amino acids phenylalanine and tyrosine. It is a genetic disorder with an autosomal-recessive mode of inheritance.  It is caused by a deficiency of the genes encoding for the homogentisate-1, 2-dioxygenase, which is an important liver enzyme that degrades homogentisic acid (HGA), a metabolite in the phenylalanine and tyrosine degradation pathway. The term ochronosis describes the accumulation of homogentisic acid in collagenous tissues of the body, resulting in dark gray pigmentation of the connective tissue and the cartilages, involving multiple organ systems. A history of early-onset degenerative arthritis, multiple joint replacements, and valvular heart disease suggest alkaptonuria along with the dark-colored airways.  The severity of symptoms progressively increases beyond 30 years of age. The physical examination may reveal the darkening of sclera and ear cartilage. The involvement of the respiratory system with ochronosis is most frequently diagnosed during autopsy. However, a premortem case of alkaptonuria has been reported as diagnosed with flexible bronchoscopy (FB).  The bronchoscopic examination reveals hyperpigmentation of the airways, including the epiglottis, larynx, bronchial cartilages, and mucosa. Hyperpigmentation of the bronchial mucosa extends distally from the trachea to the small bronchioles, and the involved bronchial mucosa is typically covered with dry black secretions. The diagnosis of alkaptonuria is based on gas chromatographic-mass spectrophotometric assays that measure urine and plasma HGA levels.  Effective management of alkaptonuria is not clearly described. Neither high-dose vitamin C nor protein restriction has effectively reduced urinary HGA excretion. Nitisinone, a triketone herbicide that reversibly inhibits 4-hydroxyphenylpyruvate-dioxygenase, has been shown to reduce urinary HGA excretion by 80% in a murine model. It can also decrease HGA production in humans; however, long-term efficacy and safety necessitate further evaluation.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/24189863/" target="_blank">Tunsupon P, Panchabhai TS, Khemasuwan D, Mehta AC. Black bronchoscopy. Chest. 2013 Nov 1;144(5):1696-706.</a>`,
      ],
      level: "Hard",
      category: "Other Pulmonary Diseases",
    }),

    //Q65
    Question_Answer.create({
      question: `An overnight Polysomnography study [PSG] reveals a sleep onset of 2.30 minutes and a rem onset of 19 minutes. The apnea hypopnea index  [AHI]  was 2.1 per hour  with an oxygen nadir of 93%. an multiple sleep latency test  [MSLT]  was performed the next day with the following results, These finding are consistent with:`,
      answerOptions: [
        `narcolepsy`,
        `obstructive sleep apnea`,
        `idiopathic hypersomnolence`,
        `periodic limb movement disorder`,
      ],
      questionImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q65/Q65+img1.png`,
      ],
      correctAnswer: `narcolepsy`,
      explanation: `A diagnosis of narcolepsy requires 2 or more sleep onset REM [SOREM] periods, this patient has only one SOREM; hence this patient does not have narcolepsy.  Multiple sleep latency test (MSLT) is not used to diagnose obstructive sleep apnea.  The AHI is within limits during the PSG which does not support the diagnosis of obstructive sleep apnea.

          In idiopathic hypersomnia, the mean sleep latency is shortened, generally less than eight minutes, and the number of sleep-onset rapid eye movement sleep periods (SOREMPS) is less than two. Thus, this case had idiopathic hypersomnia.
          MSLT is not used to diagnose periodic limb movement disorder (PLMD ). There was no evidence of PLMD during the PSG as reported in this case.
          `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/17969461/" target="_blank">Anderson KN, Pilsworth S, Sharples LD, Smith IE, Shneerson JM. Idiopathic hypersomnia: a study of 77 cases. Sleep. 2007 Oct;30(10):1274-81.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/32901432/" target="_blank">Trotti LM, Arnulf I. Idiopathic Hypersomnia and Other Hypersomnia Syndromes. Neurotherapeutics. 2021 Jan;18(1):20-31</a>`,
      ],
      level: "Moderate",
      category: "Sleep",
    }),

    //Q66
    Question_Answer.create({
      question: `Echocardiographically-obtained tricuspid annular plane systolic excursion (TAPSE)`,
      answerOptions: [
        `measures the degree of tricuspid regurgitation in PAH `,
        `is preserved in scleroderma-associated PAH`,
        `measures RV global function and is a string determinant of survival in PAH`,
        `has been validated as an endpoint for measuring response to therapy in PAH`,
      ],
      questionImage: [],
      correctAnswer: `measures RV global function and is a string determinant of survival in PAH`,
      explanation: `Pulmonary arterial hypertension (PAH) can lead to right ventricular (RV dysfunction).
        TAPSE is known as annular plane systolic excursion (TAPSE) correlates with RV systolic function. A low TAPSE of 1.8 suggests poor prognosis and predictor of survival of patients with PAH.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/16888289/" target="_blank">Forfia PR et al, Tricuspid annular displacement predicts survival in pulmonary hypertension. Am J Respir Crit Care Med. 2006 Nov 1;174(9):1034-41.</a>`,
      ],
      level: "Easy",
      category: "Pulmonary Vascular Disease",
    }),

    //Q67
    Question_Answer.create({
      question: `Which of the following is associated with higher incidence of Mediastinal germ cell tumors`,
      answerOptions: [
        `Klinefelter syndrome [XXY syndrome]`,
        `Young syndrome`,
        `Birt-Hogg-Dubé syndrome`,
        `Carney triad`,
      ],
      questionImage: [],
      correctAnswer: `Klinefelter syndrome [XXY syndrome]`,
      explanation: `Mediastinal germ cell tumors (MGCTs) are unique for their association with Klinefelter
          syndrome [XXY syndrome] and hematologic malignancies. The anterior mediastinum is
          the most common location of extragonadal germ cell tumors (GCTs). They are
          histologically classified as teratomas, seminomas, or non-seminomatous tumors. Each
          classification carries important distinctions regarding their prognosis and treatment.
          Carney triad is a rare condition that describes the occurrence of three kinds of endocrine
          tumors in the same child. The tumors comprising the triad are tumors in the
          gastrointestinal tract (known as gastrointestinal stromal tumors, or GIST), pulmonary
          chondromas, and paragangliomas. These masses grow chiefly in the stomach, the lungs,
          or the neuroendocrine tissues of the head, neck, and torso.
          Birt-Hogg-Dubé syndrome (BHDS) is an autosomal dominant disorder clinically
          manifested by skin fibrofolliculomas, renal cell carcinoma, lung cysts, and spontaneous
          pneumothorax.
          Young syndrome, also named sinusitis-infertility syndrome, is a rare inherited syndrome similar to Kartagener syndrome and often presents in middle-aged men with chronic rhinosinusitis, reduced fertility due to azoospermia, and bronchiectasis.The azoospermia is due to functional obstruction of sperm transportation down the epididymis.
          `,
      explanationImage: [],
      explanationLinks: [`<a href="" target="_blank"></a>`],
      level: "Moderate",
      category: "Other Pulmonary Diseases",
    }),

    //Q68
    Question_Answer.create({
      question: `All of the following are confirmed risk factors of Ventilator Associated Pneumonia except`,
      answerOptions: [
        `Nursing the patient in a supine position`,
        `Enteral nutrition`,
        `The use of sucralfate as stress ulcer prophylaxis`,
        `Age < 60`,
      ],
      questionImage: [],
      correctAnswer: `Age < 60`,
      explanation: `Risk Factors: Multiple factors have been identified that increase the likelihood of developing VAP. Intubation is the most important risk factor for developing nosocomial pneumonia. Although it is Difficult to differentiate between the risk imposed by the mechanical ventilator and its associated tubing and the presence of a tracheal tube, it is known that the incidence of VAP is less when non-invasive ventilation is used.

        Stress ulcer prophylaxis is routinely used in the critically ill. H2 blockers or the gastroprotective agent sucralfate form the mainstay of treatment. The use of H2 blockers is associated with a change in the acidity of the gastric juices that favors bacterial colonization with Gram negative bacteria. However, the role of gastric pH in the pathogenesis of VAP is controversial. A large, multicenter, randomized, blinded placebo-controlled trial involving 1200 mechanically ventilated patients in which sucralfate was compared with the H2 receptor antagonist ranitidine for the prevention of upper gastrointestinal bleeding failed to show any difference in the incidence of VAP. However, a number of other studies suggest that lower rates of VAP are seen in patients given a gastroprotective agent rather than agents that block gastric acid secretions. Despite these discordant results, H2 Receptor antagonists are widely used and most clinicians believe that the use of these agents to prevent stress ulcer bleeding outweighs any additional risk of VAP.

        There is an increasing awareness of the importance of body position on the development of VAP. Drakulovic and colleagues randomly allocated intubated mechanically ventilated patients to be nursed in either the semi-recumbent (45 ̊) or the supine body position. Microbiologically confirmed pneumonia developed in significantly fewer patients nursed in the semi-recumbent position (2 of 39 [5%]) than in those nursed supine (11 of 47 [23%], p = 0.018). The exact mechanism by which adoption of the semi-recumbent position decreases the incidence of nosocomial pneumonia is not completely understood but is probably related to the reduction in gastro-esophageal reflux seen in this position.

        Enteral feeding via a nasogastric tube promotes gastro-esophageal reflux, the magnitude of which is unchanged by the use of fine bore tubes. It is also associated with an increase in gastric pH and colonization of the stomach with AGNB. It is therefore unsurprising that enteral nutrition has been shown to be an independent risk factor for the development of VAP (odds ratio 5.7 (95% CI 1.5 to 22.8), p = 0.013). However, as adequate nutrition is essential in the critically ill and the enteral route is generally regarded as superior to parenteral nutrition, most clinicians advocate the commencement of early nasogastric feeding.

        Prevention:
        There are several measures that can be taken to reduce the incidence of VAP. Strict hand washing and the use of protective gowns and gloves should be routinely used in the ICU to minimize nosocomial infections. Patients should be nursed in the semi-recumbent position (45 ̊angle), gastric distension avoided, and there should not be any unnecessary changes of the ventilator circuit. Nasal intubation should be discouraged and there is increasing evidence to suggest that performance of an early tracheostomy in patients expected to require prolonged mechanical ventilation is beneficial. In a recent study of 120 patients expected to require mechanical ventilation for longer than 14days, those that were randomized to receive percutaneous dilatational tracheostomy within 48 hours of admission had a significantly lower incidence of VAP than those who received a tracheostomy after 14–16 days (5% compared with 25%, p,0.005). Daily interruption of sedative drug infusions has been shown to shorten the duration of mechanical ventilation.  There is some evidence to suggest that prophylactic parenteral antibiotics may be useful in the prevention of VAP, especially those with a significantly obtunded conscious level.

        Many ICUs are introducing "ventilator bundles", which are a group of interventions related to patients receiving mechanical ventilation that, when implemented together, result in better outcomes than when implemented individually. Some of the key components of the bundles such a positioning of the patient and avoidance of heavy sedation may reduce the incidence of VAP.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/16517798/" target="_blank">Hunter JD. Ventilator associated pneumonia Postgrad Med J 2006; 82:172-178</a>`,
      ],
      level: "Moderate",
      category: "Critical Care",
    }),

    //Q69
    Question_Answer.create({
      question: `A 65-year-old female with past medical history of HTN, COPD presented to ED due to fever, dyspnea and copious amounts of yellowish sputum production. She denies any recent travel, IV drug use, and sick contacts. On physical examination, temperature is 101 F, blood pressure is 105/60 mm Hg, pulse rate is 110/min, and respiration rate is 18/min. She is a very thin cachectic female, not in any type of distress. Lung examination reveals wheezing and rhonchi bilaterally. On abdominal examination, she has diffused minimal abdominal pain without rigidity or guarding. Blood results show WBC 1500, mildly elevated alkaline phosphatase, all other tests are negative including HIV test. Her medications include Spiriva, Albuterol inhaler, and Amlodipine. She still smokes 1 Pack per day. Blood and sputum cultures are collected. The Chest X-ray shows multiple nodules and COPD changes. Her CT chest image has shown below, What is the most likely diagnosis in the above patient?`,
      answerOptions: [
        `Bacterial Pneumonia`,
        `Pneumocystis jiroveci pneumonia (PJP)`,
        `Mycobacterium avium complex infection (MAC)`,
        `Influenza infection`,
      ],
      questionImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q69/Q69+img1.jpg`,
      ],
      correctAnswer: `Mycobacterium avium complex infection (MAC)`,
      explanation: ``,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/27134484/" target="_blank">Kwon YS, Koh WJ. Diagnosis and Treatment of Nontuberculous Mycobacterial Lung Disease. Journal of Korean medical science 2016;31:649-59.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/17277290/" target="_blank">Griffith DE, Aksamit T, Brown-Elliott BA, et al. An official ATS/IDSA statement: diagnosis, treatment, and prevention of nontuberculous mycobacterial diseases. American journal of respiratory and critical care medicine 2007;175:367-416.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/27572413/" target="_blank">Moon SM, Park HY, Kim SY, et al. Clinical Characteristics, Treatment Outcomes, and Resistance Mutations Associated with Macrolide-Resistant Mycobacterium avium Complex Lung Disease. Antimicrobial agents and chemotherapy 2016;60:6758-65.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/23532242/" target="_blank">Serisier DJ, Martin ML, Mcguckin MA, et al. Effect of long term, low dose erythromycin on pulmonary exacerbations among patients with non cystic fibrosis bronchiectasis: the bless randomized controlled trial (1997). JAMA 2013; 309: 1260-7</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/9279284/" target="_blank">American Thoracic Society. (1997). Diagnosis and treatment of disease caused by non tuberculous mycobactera. Am J respair care med 156: S1-25</a>`,
      ],
      level: "Easy",
      category: "Bronchiectasis",
    }),

    //Q70
    Question_Answer.create({
      question: `Increased levels of β-HCG and/or α-FP are specific for the following mediastinal tumor:`,
      answerOptions: [`neurogenic`, `thymic`, `lymphoma`, `germ cell`],
      questionImage: [],
      correctAnswer: `germ cell`,
      explanation: `Increased levels of beta-HCG and/or alpha- FP are specific for germ cell tumors. Germ cell tumors can be benign (teratomas dermoid cysts) or malignant (seminomas, nonseminomas).

        Thymic masses are associated with paraneoplastic syndrome, most commonly in myasthenia gravis. Patients should be evaluated for anti-acetylcholine receptor antibodies.

        Neurogenic tumors represent 60% of posterior mediastinal masses. Examples include schwannomas, neurofibromas, neuroblastomas and ganglioneuromas.

        Patients with lymphomas can present with systemic symptoms of fever, weight loss, or night sweats. Most common types of lymphoma are nodular sclerosing Hodgkin lymphoma and primary mediastinal large B cell lymphoma. This type of tumor is relatively uncommon.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.ncbi.nlm.nih.gov/books/NBK431099/" target="_blank">Sundararajan S, Carter YM. Mediastinal Nonseminoma. [Updated 2020 Jun 25]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2020 Jan-</a>`,
      ],
      level: "Moderate",
      category: "Other Pulmonary Diseases",
    }),

    //Q71
    Question_Answer.create({
      question: `There have been many attempts to quantify the level of addiction to cigarettes.  In a clinical scenario we discuss tobacco dependency in number packs of cigarettes smoked for a number of years. (pack year = 1 pack per day x 1 year).  One of the first attempts to quantify tobacco dependency was by Fagerstrom and the Fagerstrom Tolerance Questionnaire.  Later on it was revised into the Fagerstrom Test for Nicotine Dependence.  Which of the following parameters is the best indicator for severity of tobacco dependence?`,
      answerOptions: [
        `Number of cigarettes smoked in a day`,
        `Use of tobacco products while feeling ill`,
        `Difficulty in smoking in prohibited locations (church, school, hospital, etc.)`,
        `How soon after awakening you have your first cigarette`,
      ],
      questionImage: [],
      correctAnswer: `How soon after awakening you have your first cigarette`,
      explanation: `Time for the first cigarette of the day (TTF). Time to the first cigarette of the day is theoretically important to the prediction of nicotine dependence (Heatherton et al, 1989; Kozlowski, Director & Harford, 1981). Due to the relatively short half-life of nicotine, dependent smokers have depleted plasma levels of nicotine upon arising. These smokers are likely to experience discomfort unless they quickly have their first cigarette. TTF has been found to be an excellent predictor of biochemical measures (cotinine, nicotine and carbon monoxide; Heatherton et al, 1989) and also predictive of successful smoking cessation (Kabat & Wynder, 1987; Kozlowski et al, 1981). Heatherton et al (1989) found that a four-category scoring of TTF (<5, 6-30, 31-60, 61-I-) was superior to the two-category scoring method used in the FTQ (<30 vs >30) for predicting biochemical indices of smoking.

          Exploration of the Fagerstrom Tolerance Questionnaire (FTQ) scale has revealed that for the large part, the FTQ is a valid measure of heaviness of smoking as measured by biochemical indices. The precise scoring of the FTQ items affected the overall sensitivity of the scale, with modifications of TTF and Cigarettes per Day (CPD) appearing to be most important. We must stress, however, that we have no information on the relationship of FTQ or FTND or HSI to the ability to give up smoking in either the short or long run. Further research is needed to determine how these items and scoring relate to the key behavioral issue of smoking cessation. The current research has some limitations (i.e. a select sample), and these results may not extend to more representative populations.
          `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/1932883/" target="_blank">Heatherton TF, Kozlowski LT, Frecker RC, Fagerström KO. The Fagerström Test for Nicotine Dependence: a revision of the Fagerström Tolerance Questionnaire. Br J Addict. 1991 Sep;86(9):1119-27.</a>`,
      ],
      level: "Moderate",
      category: "Other Pulmonary Diseases",
    }),

    //Q72
    Question_Answer.create({
      question: `Increased levels of ( neuron specific enolase)  NSE are specific for the following mediastinal tumor:`,
      answerOptions: [`neurogenic`, `thymic`, `neuroendocrine`, `germ cell`],
      questionImage: [],
      correctAnswer: `neuroendocrine`,
      explanation: `Neuron-specific enolase (NSE) is a highly specific marker for neurons and peripheral neuroendocrine cells. NSE is a reliable tumor marker for prognosis, diagnosing and follow-up of small cell lung cancer (SCLC). Increased levels of β-HCG and/or α-FP are specific for germ cell tumor. Germ cell tumors can be benign (teratomas, dermoid cysts) or malignant (seminomas, nonseminomas). Thymic masses are associated with paraneoplastic syndrome, most commonly in myasthenia gravis. Patients should be evaluated for anti-acetylcholine receptor antibodies. Neurogenic tumors represent 60% of posterior mediastinal masses. Examples include schwannomas, neurofibromas, neuroblastomas and ganglioneuromas.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.ncbi.nlm.nih.gov/books/NBK513231/" target="_blank">Jilani TN, Siddiqui AH. Mediastinal Cancer. [Updated 2020 Aug 11]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2020 Jan-</a>`,
      ],
      level: "Moderate",
      category: "Other Pulmonary Diseases",
    }),

    //Q73
    Question_Answer.create({
      question: `An atypical carcinoid tumor of the lung is diagnosed by:`,
      answerOptions: [
        `histologic review of the resected tumor`,
        `history and physical`,
        `FDG PET scanning`,
        `presence of regional lymph node metastases (pN1)`,
      ],
      questionImage: [],
      correctAnswer: `histologic review of the resected tumor`,
      explanation: `Atypical carcinoid tumor of the lung is rarer than typical carcinoid. Commonly occurs in females and diagnosed at 60 years of age. Chest x-ray and CECT scan of the thorax can show space-occupying lesions. Diagnosis can be confirmed with bronchoscopic biopsy or CT-guided needle biopsy. Accurate histological diagnosis is vital for further management.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.researchgate.net/publication/7722893_Atypical_carcinoid_tumour" target="_blank">Vigg A, Mantri S, Swarnalata G, Mulay K. Atypical carcinoid tumour. Indian J Chest Dis Allied Sci. 2005 Jul-Sep;47(3):213-5.</a>`,
      ],
      level: "Easy",
      category: "Lung Cancer",
    }),

    //Q74
    Question_Answer.create({
      question: `Which of the following is not associated with a decrease in the measured diffusing capacity compared to predicted values?`,
      answerOptions: [
        `Smoker without emphysema`,
        `Ex-smoker without emphysema`,
        `Pulmonary vascular disease`,
        `Polycythemia`,
      ],
      questionImage: [],
      correctAnswer: `Polycythemia`,
      explanation: `Pulmonary function tests are performed to evaluate lung function diffusing capacity of lung for carbon monoxide (DLCO) measures gas transfer from inspired gas to red blood cells in the pulmonary capillaries. DLCO can be used to evaluate severity of obstructive or restrictive lung diseases, pulmonary vascular disease and disease progression in interstitial lung disease.

        Alveolar destruction due to COPD with emphysema can cause low DLCO with an obstructive pattern on PFTS. Smoking can also cause a decrease in DLCO. Interstitial lung disease also causes decrease in DLCO due to pulmonary fibrosis and thickened alveolar-capillary membrane with restrictive pattern on PFTS.

        Normal DLCO with restrictive pattern on PFTS is suspicious for neuromuscular or chest wall disorder.

        If a patient has dyspnea due to unknown origin and has normal spirometry with low DLCO, it is most likely pulmonary vascular disease.

        Asthma and obesity can cause high DLCO associated with large lung volumes. Polycythemia has high DLCO due to increased hemoglobin in the capillaries and more room for gas exchange.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/32310609/" target="_blank">Modi P, Cascella M. Diffusing Capacity Of The Lungs For Carbon Monoxide. 2020 Apr 15. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2020 Jan.</a>`,
      ],
      level: "Easy",
      category: "Pulmonary Function Testing",
    }),

    //Q75
    Question_Answer.create({
      question: `Which statement about empyema is true?`,
      answerOptions: [
        `Pleural fluid Ph is generally > 7.2`,
        `Tuberculosis related effusions often culture gram negative organisms`,
        `Anaerobes and staphylococcal species  are the major pathogens in surgically treated empyemas.`,
        `Can be empirically  treated with a combination  of β-lactam with β-lactamase inhibitors  and aminoglycosides.`,
      ],
      questionImage: [],
      correctAnswer: `Anaerobes and staphylococcal species  are the major pathogens in surgically treated empyemas.`,
      explanation: `Empyema is a frankly purulent infection of the pleural space most often occurring secondary to parapneumonic effusion. It often results from an infected parapneumonic effusion. Alternatively, it can be seen following trauma, surgery, esophageal perforation, or secondary to local spread from an adjacent subphrenic abscess or osteomyelitis,


          S. aureus is generally the most common cause of empyema, although anaerobes and other strains of Staphylococcus and Streptococcus are not uncommonly seen. Anaerobes and staphylococcal species  are the major pathogens in surgically treated empyemas. A frankly purulent collection noted on thoracentesis indicates the need for therapeutic drainage. If the fluid is not clearly infected, laboratory analysis can be helpful. Generally, pleural fluid pH <7.2, glucose level <60 mg/dL, and lactate dehydrogenase (LDH) >1000 units/L indicates an empyema or complicated parapneumonic effusion that requires therapeutic drainage.
          Most antibiotics cross the pleural space and are thus safe to use, with the exception of aminoglycosides (due to their inactivation in low pH environments). Appropriate empirical agents for empyema include β-lactam with β-lactamase inhibitors (e.g., amoxicillin-clavulanate or piperacillin-tazobactam) and carbapenems (e.g., imipenem or meropenem).Tube thoracostomy with the usage of fibrinolytics is often required because empyema is a fibrinopurulent process characterized by multiloculation.
          The combination of tPA augmented with a mucolytic-like deoxyribonuclease (DNase) instilled in the pleural cavity via chest tube can further help by decreasing the viscosity of infected fluid, helping to increase volume drained and prevent tube thoracostomy failure.
          In the presence of an advanced stage empyema with multiple loculations and/or thick pleural peel, surgical consultation for video-assisted thoracoscopic surgery (VATS), decortication, or open thoracotomy should be sought. Tuberculous empyema represents a chronic, active infection of the pleural space that contains a large number  of tubercle bacilli and results due to reactivation of latent tuberculosis.
          `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/29712613/" target="_blank">Pinnola A, Kuo YH, Sciarretta JD, McIntyre A, Messier R, Davis JM. Bacteriology and Comorbidities in Patients Requiring Surgical Management of Empyema. Am Surg. 2018 Apr 01;84(4):599-603.</a>`,
      ],
      level: "Easy",
      category: "Pleural Diseases",
    }),

    //Q76
    Question_Answer.create({
      question: `Which of the following medications have activity against SARS CoV-2 virus`,
      answerOptions: [
        `Azathioprine`,
        `Calcineurin inhibitors`,
        `Mechanistic target of rapamycin inhibitors`,
        `Mycophenolate mofetil`,
      ],
      questionImage: [],
      correctAnswer: `Calcineurin inhibitors`,
      explanation: `THE SARS CoV-2 infection involves the initiation of uncontrolled inflammatory response which contributes to development of ARDS, thrombotic complication and eventually pulmonary fibrosis. Calcineurin inhibitors [e.g.tacrolimus, or cyclosporine] have been shown to have in vitro activity against coronaviruses [1].  In case of a SARS CoV-2 infection in a patient with solid organ transplant it is generally recommended to continue Calcineurin inhibitors at a reduced dose [2].

        Mycophenolate and Azathioprine have been shown to have activity against MERS-CoV [3].

        Medications like Sirolimus and Everolimus are inhibitors of the mammalian target of rapamycin (mTOR) and reduce the risk of cytomegalovirus (CMV) infection in transplant recipients [4].
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/22046132/" target="_blank">Pfefferle S, Schöpf J, Kögl M, et al. The SARS-coronavirus-host interactome: identification of cyclophilins as target for pan-coronavirus inhibitors. PLoS Pathog. 2011;7(10)</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/32329975/" target="_blank">Akalin E, Azzi Y, Bartash R, et al. Covid-19 and Kidney Transplantation. N Engl J Med. 2020;382(25):2475-2477.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/25542975/" target="_blank">Cheng KW, Cheng SC, Chen WY, et al. Thiopurine analogs and mycophenolic acid synergistically inhibit the papain-like protease of Middle East respiratory syndrome coronavirus. Antiviral Res. 2015;115:9-16.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/30543830/" target="_blank">Tan L, Sato N, Shiraki A, et al. Everolimus delayed and suppressed cytomegalovirus DNA synthesis, spread of the infection, and alleviated cytomegalovirus infection. Antiviral Res. 2019;162:30-38.</a>`,
      ],
      level: "Hard",
      category: "Infection",
    }),

    //Q77
    Question_Answer.create({
      question: `A 45-year-old female presented with h/o progressive dyspnea and cough for seven months. She was put on ATT (4 drugs) without any improvement. On examination she was found to have cyanosis, clubbing and bilateral fine end inspiratory crepitation at the lung bases. HRCT revealed bilateral reticulonodular shadows, which are predominately subpleural and basal with extensive honeycombing. Spirometry showed moderately severe restrictive defects. The possible clinical diagnosis is:`,
      answerOptions: [
        `Multiple Drug Resistance Tuberculosis`,
        `Nonspecific Interstitial Pneumonia`,
        `Usual Interstitial Pneumonia`,
        `Acute Interstitial Pneumonia`,
      ],
      questionImage: [],
      correctAnswer: `Usual Interstitial Pneumonia`,
      explanation: `Usual interstitial pneumonia (UIP) is a form of lung disease resulting in progressive scarring of both lungs. Some key histologic features of UIP are dense fibrosis with frequent honeycomb fibrosis, fibroblastic foci typically scattered at the edges of dense scars, patchy lung involvement and frequent subpleural/paraseptal distribution. Reticular opacities are often associated with honeycombing and traction bronchiectasis more predominance in the lower lobes.

          Nonspecific interstitial pneumonia (NSIP) occurs subacute onset compared to UIP where it is more insidious. Other distinguishing features include absence of clubbing, seen in rheumatic diseases or connective tissue disorder and better prognosis compared to UIP. The most frequent HRCT finding in NSIP is increased reticular marking, traction bronchiectasis and ground glass opacities common in the lower lung zones. Honeycombing changes are rarely seen in UIP.

          Acute interstitial pneumonia (AIP) has similar features compared to ARDS with imaging and rapid onset.

          Multiple Drug Resistance Tuberculosis (MDR TB) usually shows cavitation in the upper lobes.
          `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/29052582/" target="_blank">Martinez FJ, Collard HR, Pardo A, Raghu G, Richeldi L, Selman M, Swigris JJ, Taniguchi H, Wells AU. Idiopathic pulmonary fibrosis. Nat Rev Dis Primers. 2017 Oct 20;3:17074.</a>`,
      ],
      level: "Hard",
      category: "Interstitial Lung Diseases",
    }),

    //Q78
    Question_Answer.create({
      question: `A 70 year old woman with a history of diabetes, hypertension, dyslipidemia was brought to the emergency department after complaining of Nausea, Chest pain radiating to left arm and Short of Breath at home.  Once arrived at the hospital, she underwent immediate cardiac catheterization that showed apical ballooning with no significant coronary stenosis.  Troponin T and CK enzymes were mildly elevated.  She stayed in the hospital for 1 week and was treated with metoprolol and lisinopril.  Prior to discharge from the hospital she received an echocardiogram that showed no abnormality and all cardiac enzymes returned to normal.  What of the following is the most important factor precipitating this patients' symptoms?`,
      answerOptions: [
        `Hypertension`,
        `Dyslipidemia`,
        `Emotional Stress`,
        `Angina`,
      ],
      questionImage: [],
      correctAnswer: `Emotional Stress`,
      explanation: `Takotsubo Cardiomyopathy, also referred to as “broken heart syndrome” was initially reported in Japan as a transient cardiomyopathy precipitated by acute stress.  It is indistinguishable from myocardial infarction.  Patients clinically present with severe chest pain, and shortness of breath along with nausea and vomiting. Emotional and stressful situations such as death in family or financial problems are usually the initial triggering factor for Takotsubo Cardiomyopathy.  Included in a long list of Differential Diagnosis is Myocardial infarction, Unstable Angina and Esophageal spasm.  In the majority of patients, cardiac enzyme panels show elevated Troponins and Ck-MB.  Echocardiogram provides a quick diagnostic evaluation showing apical wall dysfunction.  However, a cardiac catheterization is required to confirm the diagnosis.   Treatment is supportive in nature.  Patients are admitted to intensive care units for observation and started on angiotensin-converting enzymes (ACE) and beta-blockers are used to restore left ventricular function.  Heart function gradually improves over a few days to a week.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/22042929/" target="_blank">Sharkey SW, Lesser JR, Maron BJ. Takotsubo (Stress) Cardiomyopathy. Circulation.  2011;124: e460-e462</a>`,
      ],
      level: "Hard",
      category: "Critical Care",
    }),

    //Q79
    Question_Answer.create({
      question: `Which of the following Diagnostic tests is used for definitive diagnosis of West Nile Virus?`,
      answerOptions: [
        `Elevated Protein in CSF`,
        `Nucleic Acid Amplification Test`,
        `Detection of IgM antibody in serum or CSF via (MAC-ELISA)`,
        `Detection of IgG antibody in serum or CSF`,
      ],
      questionImage: [],
      correctAnswer: `Detection of IgM antibody in serum or CSF via (MAC-ELISA)`,
      explanation: `Detection of IgM antibody in serum or CSF (MAC-ELISA).  IgM antibody in serum or CSF is using IgM antibody-capture enzyme linked immunosorbent assay (MAC-ELISA) is the cornerstone for diagnosing WNV.  IgM doesn’t cross plasma and can be detected in high concentration in CSF.  Nucleic Acid Amplification Test is used as an adjunct to MAC-ELISA.  It is most useful in immunocompromised patients who have no antibodies or blood donors’ screenings for future transfusions. IgG detection is not useful in an acute condition.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4563989/" target="_blank">Petersen LR, Brault AC, Nasci RS. West Nile virus: review of the literature. JAMA. 2013 Jul 17;310(3):308-15</a>`,
      ],
      level: "Hard",
      category: "Infection",
    }),

    //Q80
    Question_Answer.create({
      question: `A 69-year-old man presents to the clinic for a first-time visit. He has a 10-year history of COPD and a long history of Rheumatoid Arthritis of the hands.  He is currently taking a short-acting β-agonist for his COPD, and he mentions that he has had 2 exacerbations in the past year. Which of the following is the next best step for the treatment of his COPD?`,
      answerOptions: [
        `Start patient on a nebulized long-acting bronchodilator`,
        `Start patient on long-acting β2-agonist (LABA) or long-acting muscarinic antagonist (LAMA) administered via a slow mist inhaler`,
        `Start patient on a LABA or LAMA administered via a metered dose inhaler`,
        `Start patient on nebulized budesonide`,
      ],
      questionImage: [],
      correctAnswer: `Start patient on a nebulized long-acting bronchodilator`,
      explanation: `This patient's COPD is not adequately treated. Short-acting bronchodilators provide acute relief of COPD symptoms but are recommended for patients who are at low risk for COPD exacerbation. Treatment options for this patient should include long-acting muscarinic antagonists (LAMAs) or long-acting β2-agonists (LABAs), which will not only improve his symptoms and lung function but also help prevent exacerbations. The patient's osteoarthritis is important to consider when deciding on an inhaler device.

        The best option for this patient is a device that requires less coordination and is relatively Easy to load with medication.  Arthritis can impair the appropriate use of pressurized metered dose inhalers, dry powder inhalers, and soft mist inhalers.  Nebulizers should be considered in patients who may have difficulty with handheld devices.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/29884254/" target="_blank">Criner GJ, Dreher M, D'Ambrosio CM, Zuwallack R, Geiseler J, Pépin JL. COPD Advanced Patient Management. Chest. 2018 Jun;153(6):1497-1498.</a>`,
      ],
      level: "Moderate",
      category: "Chronic Obstructive Pulmonary Disease",
    }),

    //Q81
    Question_Answer.create({
      question: `A 75 -year-old male is seen in the emergency department after a dental procedure extraction in which Lidocaine hydrochloride 2 % was used as topical anesthesia. His wife tells the emergency physician that he felt unwell after the procedure and gradually became more and more drowsy. The patient appears cyanosed despite a good respiratory effort, a clear airway, and bilateral breath sounds. Although he responds to vocal commands, He does appear a bit lethargic. Pulse oximetry shows a oxygen saturation is 85 % with the patient breathing room air. An arterial blood gas yielded a PaO2 of 104 mmHg with oxyhemoglobin measurement of 96%.   Which of the following could explain the discrepancy between saturation as measured by pulse oximetry [SPO2] and the arterial oxygen saturation as measured by Arterial blood gas [SaO2]? `,
      answerOptions: [
        `Presence of Methemoglobin`,
        `Presence of Carboxyhemoglobin`,
        `Lab error in measuring ABG`,
        `Pulse oximetry device is nonfunctional`,
      ],
      questionImage: [],
      correctAnswer: `Presence of Methemoglobin`,
      explanation: `Methemoglobinemia (MetHb) is a disorder where abnormal levels of methemoglobin are produced in the blood. It is uncommon but can be fatal if not quickly recognized and treated due to rapid oxygen desaturation. This disorder develops when iron in the hemoglobin is oxidized from the ferrous state (Fe+2) to ferric state (Fe+3) and the hemoglobin is unable to carry oxygen.
          Most cases of MetHb are acquired due to ingestion of exogenous agents. Dapsone and topical anesthetic agents such as benzocaine, lidocaine and prilocaine are the most common triggering agents used during bronchoscopy, laryngoscopy or upper gastrointestinal endoscopy. Lidocaine was used in this patient after dental procedure and there was a decline in oxygen saturation due to the result of MetHb.
          Methemoglobin absorbs at both 660 and 940 nm which can lead to error in estimating percentages of reduced oxyhemoglobin. For example, high concentration of methemoglobin can display oxygen saturation as 85%, regardless of the true hemoglobin oxygen saturation. A low oxygen saturation by pulse oximetry but pressure of normal arterial blood gas can be an indication of MetHb.  Blood gas analysis measures arterial oxygen partial pressure and estimates oxygen saturation. Those suspected with methemoglobinemia should be confirmed by co-oximetry.
          In Methb, methemoglobin levels usually resolve spontaneously over 15-20 hours when the offending agent is removed, and oxygen is administered. If cyanosis is present and persistent, methylene blue should be administered.
          Acute carbon monoxide (CO) poisonings are suspected in the history of fire-related smokes or poorly functioning heating systems. Moderately to mild CO-intoxicated patients often present with headaches most common, malaise, nausea and dizziness. Carboxyhemoglobin absorbs approximately the same amount of 660 nm light as oxyhemoglobin. CO pulse oximetry can falsely represent normal reading. Arterial oxygen tension (PaO2) is usually normal because PaO2 represents 02 dissolved in blood not affected by CO. In contrast, hemoglobin bound O2 is reduced in the presence of carboxyhemoglobin. When CO poisoning is expected, co-oximetry is recommended for measuring carboxyhemoglobin levels.
          `,
      explanationImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q81/A81+img1.png`,
      ],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/18215265/" target="_blank">Kwok S, Benzocaine and lidocaine induced methemoglobinemia after bronchoscopy: a case report. Journal of Medical Case Reports 2008, 2:16</a>`,
      ],
      level: "Hard",
      category: "Pulmonary Function Testing",
    }),

    //Q82
    Question_Answer.create({
      question: `Corticosteroids are widely used in treatment of Bronchial asthma. All of the following factors predict diminished dose response to Corticosteroids in patients with persistent asthma except:`,
      answerOptions: [
        `Genetic Polymorphism`,
        `H/O Smoking`,
        `Obesity`,
        `GE Reflux`,
      ],
      questionImage: [],
      correctAnswer: `GE Reflux`,
      explanation: `Inhaled corticosteroids (ICSs) are used extensively in the treatment of asthma and chronic obstructive pulmonary disease (COPD) due to their broad anti-inflammatory effects. They improve lung function, symptoms, and quality of life and reduce exacerbations in both conditions but do not alter the progression of disease. They decrease mortality in asthma but not COPD. Six ICSs are available for use in the United States: Beclomethasone dipropionate [BDP], flunisolide, budesonide (BUD), fluticasone propionate (FP), mometasone furoate, and ciclesonide. Factors associated with a diminished dose response to ICSs include   patients underlying genetic polymorphisms, COPD, smoking, severe asthma, obesity, and vitamin D insufficiency. Patients with asthma who are homozygous for the variant allele rs37973, which maps to the glucocorticoid-induced transcript 1 gene (GLCCI1), show about one third the lung function response of that of those homozygous for the wild-type allele. The variant occurs in about 16% of the population. Smoking, COPD, and severe asthma result in oxidative stress and resultant inflammatory pathways induce relative resistance to steroid actions. Gastroesophageal reflux disease exacerbates Asthma and produces cough but has not been shown to be a factor in steroid resistance.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/21198556/" target="_blank">Barnes PJ. Glucocorticosteroids: current and future directions. Br J Pharmacol 2011;163:29–43.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/21991891/" target="_blank">Tantisira KG, Lasky-Su J, Harada M, Murphy A, Litonjua AA, Himes BE, Lange C, Lazarus R, Sylvia J, Klanderman B, et al. Genomewide association between GLCCI1 and response to glucocorticoid therapy in asthma. N Engl J Med 2011;365:1173–1183</a>`,
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3863730/" target="_blank">Sutherland ER, Goleva E, Strand M, Beuther DA, Leung DYM. Body mass and glucocorticoid response in asthma. Am J Respir Crit Care Med 2008;178:682–687</a>`,
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2868500/" target="_blank">Sutherland ER, Goleva E, Jackson LP, Stevens AD, Leung DYM. Vitamin D levels, lung function and steroid response in adult asthma. Am J Respir Crit Care Med 2010;181:699–704</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/23370915/" target="_blank">Raissey HH. Inhaled Corticosteroids in Lung Disease Am J Resp Crit Care Med 2013 ;187:798-803</a>`,
      ],
      level: "Easy",
      category: "Asthma",
    }),

    //Q83
    Question_Answer.create({
      question: `On HRCT of the Chest ‘Crazy paving’ appearance is generally seen in patient with:`,
      answerOptions: [
        `Silicosis`,
        `Hypersensitivity pneumonitis`,
        `Pulmonary alveolar proteinosis`,
        `Idiopathic pulmonary hemosiderosis`,
      ],
      questionImage: [],
      correctAnswer: `Pulmonary alveolar proteinosis`,
      explanation: `Crazy paving refers to the appearance of ground-glass opacities with superimposed interlobular septal thickening and intralobular septal thickening, seen on chest HRCT or standard CT chest. It is a nonspecific finding that can be seen in a number of conditions.  This resembles irregular shaped paving stones [Fig. 1] [1]. Classically it is seen in alveolar proteinosis which presents as bilateral ground glass opacities with smooth septal thickening in a patchy and geographic distribution. Predominantly these findings are seen in the lower lobes of the lungs at the perihilar [2] resembling pulmonary edema. Other common etiologies of crazy paving include Pneumocystis carinii pneumonia, sarcoidosis, nonspecific interstitial pneumonia, organizing pneumonia, exogenous lipoid pneumonia, adult respiratory distress syndrome, and pulmonary hemorrhage syndromes. HRCT finding of silicosis includes centrilobular nodular opacities, focal ground glass opacities and patchy consolidations [3]. Egg shell calcifications are also seen.

          Classic features of Hypersensitivity pneumonitis on HRCT are small centrilobular nodules, ground-glass attenuation, and lobular areas of decreased attenuation and vascularity known as mosaic attenuation [4]. Idiopathic pulmonary hemosiderosis (IPH) is a rare disease, primarily found in children, described as recurrent episodes of diffuse alveolar hemorrhage. Eventually this disorder can lead to hemosiderosis and fibrosis. HRCT findings of Idiopathic pulmonary hemosiderosis have ground-glass characteristics. Most of the opacities are predominant in the middle and lower lung fields. Occasionally crazy paving pattern can be seen due to hemosiderin in the interstitium   [5].
          `,
      explanationImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q83/Q83+img1.png`,
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q83/Q83+img2.png`,
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q83/Q83+img3.png`,
      ],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/18195376/" target="_blank">Hansell DM, Bankier AA, MacMahon H, McLoud TC, Müller NL, Remy J. Fleischner society: glossary of terms for thoracic imaging. Radiology. 2008; 246:697–722.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/2752679/" target="_blank">Murch CR, Carr DH. Computed tomography appearances of pulmonary alveolar proteinosis. Clin Radiol. 1989;40:240–243.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/18029877/" target="_blank">Marchiori E, Silicoproteinosis: high-resolution CT findings in 13 patients. AJR Am J Roentgenol. 2007 Dec;189(6):1402-6.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/28598197/" target="_blank">Vasakova M, Morell F, Walsh S, et al. Hypersensitivity Pneumonitis: Perspectives in Diagnosis and Management. Am J Respir Crit Care Med 2017; 196:680.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/25515792/" target="_blank">Khorashadi L, Wu CC, Betancourt SL, Carter BW. Idiopathic pulmonary haemosiderosis: spectrum of thoracic imaging findings in the adult patient. Clin Radiol 2015; 70:459.</a>`,
      ],
      level: "Easy",
      category: "Interstitial Lung Diseases",
    }),

    //Q84
    Question_Answer.create({
      question: `A 61-year-old male is admitted to the hospital with a three days history of fever chills rigors. He is producing copious yellowish sputum, which at times is dark colored. He was seen in an outpatient clinic, was diagnosed with viral bronchitis and was advised fluids and analgesics. On admission his BP is 90/60 mmHg, his blood sugar was 182 mg/dl.  He receives two liters of normal saline in the emergency room and now his blood   pressure is 120/80 mmHg. Over the next 12 hours he experiences further dyspnea and respiratory support. Post intubation a tracheal catheter suction aspirate was sent which was reported as white blood cells, sporadic gram-positive cocci in pairs, and few yeast cells. Would be the most appropriate therapy for this patient:`,
      answerOptions: [
        `Vancomycin and Piperacillin/tazobactam`,
        `Ceftriaxone and Bactrim`,
        `Ceftriaxone and Azithromycin`,
        `Moxifloxacin and fluconazole`,
      ],
      questionImage: [],
      correctAnswer: `Ceftriaxone and Azithromycin`,
      explanation: `Community Acquired pneumonia [CAP] guidelines recommend coverage for both typical [streptococcus pneumonia, Haemophilus influenzae] and atypical [Mycoplasma, Chlamydia, Legionella) organisms.  On the other hand, Staphylococcus Aureus, Pneumocystis Carinii, And Pseudomonas are usually not the causative organisms of CAP.  Thus, Vancomycin [which cover Staphylococcus Aureus], Pipracillin/tazobactam [which covers Pseudomonas], or any regimen that covers Bactrim [which covers
          Pneumocystis jiroveci] will not be the correct choice. Pneumocystis jiroveci pneumonia is a fungal infection of the lungs. The disease used to be called Pneumocystis carinii.

          Pneumocystis jiroveci is a fungus common in the environment and does not cause illness in healthy people. However, it can cause a lung infection in people with a weakened immune system due to cancer, chronic use of corticosteroids or other medications that weaken the immune system, HIV/AIDS, organ or bone marrow transplant. This is not the situation for our patient here. Vancomycin and Piperacillin/Tazobactam combination is a good choice for health care related pneumonia but as it does not cover atypicals; so, this will not be the correct choice. Fluoroquinolones like Moxifloxacin [and levofloxacin] do cover both typical and atypical organisms in CAP. However, Candida is never the cause of CAP. The gram stain of this patient shows yeast which is probably colonization; thus, this patient will not benefit from fluconazole. The gram stain shows gram positive cocci in pairs which is again is very suggestive of underlying pneumonia due to S pneumoniae. [Rusty colored sputum is usually caused by pneumococcal bacteria in pneumonia].

          Hence, in this case, Ceftriaxone and Azithromycin is the most appropriate choice.

          Candida infection of the lung only occurs in patients who have a profound neutropenia or an embolic disease from right sided candida endocarditis.
          `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/17278083/" target="_blank">Mandell LA.  Infectious Disease society of America/ American thoracic society consensus guidelines on the management of community acquired pneumonia in adults. Clin Infect Dis 2007;44:S27-72</a>`,
      ],
      level: "Easy",
      category: "Infection",
    }),

    //Q85
    Question_Answer.create({
      question: `In children under three years of age   who have had four or more wheezing episodes in the past year that lasted more than one day, all of the following are predictive of development of persistent (i.e., life-long) asthma after the age of five, if they have any one of the following except:`,
      answerOptions: [
        `Parent with asthma`,
        `Physician diagnosis of atopic dermatitis (often called eczema)`,
        `Evidence of sensitization to allergens in the air (i.e., positive skin tests or blood tests to allergens such as trees, grasses, weeds, molds, or dust mites)`,
        `Four percent or less blood eosinophilia`,
      ],
      questionImage: [],
      correctAnswer: `Four percent or less blood eosinophilia`,
      explanation: `The 2007 National Heart, Lung and Blood Institute (NHLBI) Guidelines for the Diagnosis and Management of Asthma describes the Asthma Predictive Index (API), a guide to determining which small children will likely have asthma in later years. 

          High-risk children (under age three) who have had four or more wheezing episodes in the past year that lasted more than one day, are much more likely to have persistent (i.e., life-long) asthma after the age of five, if they have either of the following:
          One major criterion:
          ●	Parent with asthma
          ●	Physician diagnosis of atopic dermatitis (i.e. eczema)
          ●	Evidence of sensitization to allergens in the air (i.e., positive skin tests or
          blood tests to allergens such as trees, grasses, weeds, molds, or dust mites)

          OR

          Two minor criteria:
          ●	Evidence of food allergies
          ●	4 percent or more blood eosinophilia
          ●	Wheezing apart from colds

          Clinicians should use API routinely in young children to determine who is more likely to develop Asthma later years in life.
          `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/11029352/" target="_blank">Castro-Rodriguez JA, et al. A clinical index to define risk of asthma in young children with recurrent wheezing. Am J Respir Crit Care Med 2000; 162: 1403-1406.</a>`,
      ],
      level: "Moderate",
      category: "Asthma",
    }),

    //Q86
    Question_Answer.create({
      question: `Lung transplant is indicated in:`,
      answerOptions: [
        `Stage I bronchogenic carcinoma`,
        `Cystic fibrosis`,
        `Bronchial asthma`,
        `COPD with acute leukemia`,
      ],
      questionImage: [],
      correctAnswer: `Cystic fibrosis`,
      explanation: `Lung transplantation is considered for adults who have advanced lung disease and following criteria is:

        1.	High risk of death due to lung disease within 2 years if lung transplantation
                             not performed.
        2.	High likelihood of surviving at least 90 days after lung transplantation.
        3.	High likelihood of 5-year post transplant survival with adequate graft
                            function.

        Contraindications to lung transplantation:
        ●	Poorly controlled dysfunction of major organ systems (heart, liver, kidney, brain).
        ●	Unstable medical condition (acute sepsis, Myocardial infarction, liver failure)
        ●	Uncorrected bleeding disorder
        ●	Mycobacterium tuberculosis active infection
        ●	Uncorrected coronary artery disease with end-organ ischemia or dysfunction not modifiable to revascularization
        ●	Absence of strong social support
        ●	History of illicit substance abuse or dependence (alcohol, tobacco, marijuana or illicit substance)
        ●	History of noncompliance
        ●	Poor rehab potential
        ●	Untreated psychiatric disorders such as depression or psychosis

        Some of the common conditions’ lung transplant is indicated are:
        ●	COPD (progressive disease)
        ●	IPF
        ●	ILD
        ●	Pulmonary vascular disease and NYHA functional class III or IV
        ●	Cystic Fibrosis
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/31588850/" target="_blank">Mitchell AB, Glanville AR. Lung transplantation: a review of the optimal strategies for referral and patient selection. Ther Adv Respir Dis. 2019</a>`,
      ],
      level: "Easy",
      category: "Lung Transplant",
    }),

    //Q87
    Question_Answer.create({
      question: `All of the following can be seen in sputum of patients with severe asthma except:`,
      answerOptions: [
        `Charcot Leyden Crystals`,
        `Curshmann’s spirals`,
        `Creola Bodies`,
        `Increased lymphocytes`,
      ],
      questionImage: [],
      correctAnswer: `Increased lymphocytes`,
      explanation: `Asthma is an airways disorder with inflammation of the airways, bronchial hyper responsiveness and reversible airways obstruction.

          Charcot Leyden Crystals – these are abnormal Bipyramidal Crystals of Eosinophils Lysophospholipase seen in Asthmatic Sputum. They appear as colorless needle shaped structures.

          Curshmann’s spirals – corkscrew shaped twists of condensed mucus in asthmatic sputum.

          Creola Bodies – multiple clumps of sloughed surface epithelial cells which may be seen in asthmatic patients.

          Sputum eosinophilia is seen in both mild and severe asthma. IL-5 is highest in mild asthma but Eosinophilic cationic protein [ECP] is highest in severe Asthma. Infiltration of the airways with inflammatory cells is the hallmark of Asthma. There is generally marked eosinophilic infiltration. However, in fatal asthma neutrophilic infiltration is the hallmark.
          `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1758588/" target="_blank">Hargreave FE. The investigation of airway inflammation in asthma: sputum examination. Clin Exp Allergy. 1997 May;27 Suppl 1:36-40.</a>`,
      ],
      level: "Moderate",
      category: "Asthma",
    }),

    //Q88
    Question_Answer.create({
      question: `32-year-old women presents with history of partial complex seizure for last one year.  She also has h/o headaches and h/o paranoid behavior noticed in last six months. Her CSF examination reveals examination reveals elevated proteins and lymphocytosis.  Her rest of the work up is negative except she has a lesion in the right ovary suggestive of a benign teratoma. You would recommend resection of teratoma even if it is benign for the following the following reason:`,
      answerOptions: [
        `Possibility that this teratoma may turn out to be malignant`,
        `Prophylactic surgery`,
        `Pt has paraneoplastic limbic encephalitis`,
        `Possibility of torsion in the lesion`,
      ],
      questionImage: [],
      correctAnswer: `Pt has paraneoplastic limbic encephalitis`,
      explanation: `The patient has paraneoplastic anti-N-methyl-D-aspartate receptor encephalitis associated with ovarian teratoma.   

        Anti-N-methyl-D-aspartate receptor (NMDAR) encephalitis is a relatively new recognized clinical syndrome new category of encephalitis associated with "anti-NMDAR antibodies", which are antibodies to the NR1/NR2 heteromers of NMDAR.

        The disease is common in women (usual age 14-44 years). Patients present with prominent psychiatric symptoms [schizophrenia-like symptoms, usually preceded by fever, headache, or viral infection-like illness], amnesia, seizures, frequent orofacial-limb dyskinesias, autonomic dysfunction, and decreased level of consciousness leading to hypoventilation often requiring ventilatory support.  Brain MRI is usually unremarkable but focal enhancement or medial temporal lobe abnormalities can be observed.   All have serum and or cerebrospinal fluid antibodies that act react with NR2B (and to a lesser extent NR2A) subunits of the N-methyl-D-aspartate receptor [NMDAR] on the hippocampus/forebrain, the condition is also referred as ovarian teratoma-associated limbic encephalitis (OTLE).

        Most patients have teratoma of the ovary or occasionally in the mediastinum. The teratoma tissue in these cases contain nervous tissue that strongly express NR2 subunits and react with the patients' antibodies. Tumor resection and immunotherapy result improvement or full recovery. However recent studies show that this disorder can occur even in the absence of teratoma and even boys and adult men have been affected.

        Thus, such a condition can be thought of as a paraneoplastic neurologic syndrome.  
        Thus, Paraneoplastic neurological syndromes (PNS) are rare disorders in which neurological signs and symptoms develop associated with cancer, but not caused by direct invasion, metastasis or consequences of treatment. They are usually autoimmune in nature.  Frequently, the cerebrospinal fluid (CSF) study in these patients reveals lymphocytic pleocytosis, elevated protein, increased IgG synthesis and oligoclonal bands, supporting the immunological pathology.

        It has been more commonly recognized in patients with neuroblastoma or small cell lung carcinoma [3-5% small cell cancer (SCLC) , and in 30–50% of the patients with thymoma
        and sclerotic myeloma. As mentioned above even benign teratomas may be associated with this kind of syndrome.

        Many On Neurological Antibodies are described which may at times is helpful in clinching the diagnosis. Some common ones are as below:

        Anti-neuronal nuclear antibody-1 [Anti Hu]                     Small cell ca lung, thymoma
        Anti-neuronal nuclear antibody-2 [Anti Ri]                      Small cell ca lung, breast ca
        Anti Ma-2  antibodies                                      	       Germ cell tumor testis, lung,      	 			 	breast, NHL
        Voltage-gated calcium channel [ VGCC] N antibodies    Lung, breast, ovarian
        VGCC  P/Q antibodies                                                      small cell ca Lung
        Voltage-gated potassium channel complex                       Small cell Ca Lung, Thymoma
        Anticholinergic muscle antibodies                                    Small cell Ca Lung, Thymoma
        NMDA receptor antibodies                                               Ovarian teratoma

        The three common ones to know are the ones associated with   PNS   those with cell membrane-associated antibodies like voltage-gated potassium channel complex, NMDA receptor antibodies and voltage-gated calcium channel antibodies.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/22412264/" target="_blank">Kannoth  S. Paraneoplastic neurologic syndrome: A practical approach.  Ann Indian Acad Neurol. 2012 Jan-Mar; 15(1): 6–12.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/21711262/" target="_blank">Raspotnig M. Onconeural antibodies in patients with neurological symptoms: detection and clinical significance. Acta Neurol Scand Suppl. 2011;(191): 83-8</a>`,
      ],
      level: "Hard",
      category: "Mediastinal Disorders",
    }),

    //Q89
    Question_Answer.create({
      question: `Which of the following infections can cause Pulmonary Arterial Hypertension?`,
      answerOptions: [
        `Strongyloides Stercoralis`,
        `Salmonella Typhi`,
        `Shigella Sonnei`,
        `Schistosoma Mansoni`,
      ],
      questionImage: [],
      correctAnswer: `Schistosoma Mansoni`,
      explanation: `Strongyloides Stercoralis is the parasitic helminth roundworm that can cause diarrhea, erythematous pruritus, eosinophilia and elevated IgE levels. Salmonella Typhi is an enteric bacterium causing typhoid fever. Shigella Sonnei results in bright red bloody diarrhea, fever, abdominal pain and dysentery. The pathogenic mechanism involves shiga toxins [enterotoxin, cytotoxin and neurotoxin], cytokine mediated inflammation of colon and necrosis of colon epithelium. Schistosomiasis is a chronic helminthic disease caused by intravascular parasite schistosoma trematode worms.  Eggs are passed in human excrement, hatch in water into mericidia and are ingested by the snails. The freshwater snails are the intermediate hosts. The cercarial form is released into water from snails and rapidly penetrates the human skin, to localize in various organs. There are two common forms: urinary schistosomiasis (S. haematobium) seen commonly in south East Asia and intestinal schistosomiasis (S. mansoni, S. japonicum) seen commonly in Middle East, Central Central Africa and South America.

          Acute schistosomiasis (Katayama Fever) is a febrile response to the parasite in nonimmune persons six to eight weeks after a heavy first infection.  Pulmonary involvement in acute schistosomiasis includes ill-defined nodular pulmonary infiltrates which are believed to be immunologically mediated   along with associated eosinophilia. This is usually self-limited and resolves over 1-2 months.

          In the chronic stage, a T cell mediated granulomatous inflammation of the lung results in pulmonary disease.   Pulmonary Arterial hypertension results from abnormal migration of eggs of   S. mansoni from either the portal system through portocaval shunts   or from vesical veins in S. haematobium to pulmonary vascular beds with T cell mediated granuloma formation around the eggs.  Dyspnea on exertion; decreased lung volume and impaired diffusion are common. Fine nodules along with dilatation of pulmonary arteries are the most common radiographic pattern. Eggs may be detected at times in bronchoalveolar lavage or transbronchial biopsy. Usually, ova can be detected in urine (S. haematobium) or stool (S. mansoni or S. japonicum) or on bladder or rectal biopsy.  Praziquantel is the drug of choice for the treatment of all forms of schistosomiasis.
          `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/10589899/" target="_blank">Cook GS, Lavlani A, Gleason FV, et al. Acute pulmonary schistosomiasis in travelers returning from lake Malawi, sub-Saharan Africa. Clin Infect Dis 1999;29:836-39</a>`,
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2812430/" target="_blank">Connor EB. Parasitic pulmonary disease. Am Rev Respir Dis 1982;126:558-563</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/9195681/" target="_blank">Morris W, Knauer M. Cardiopulmonary manifestations of Schistosomiasis. Sem Respir Infect 1997;12:159-170</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/21586478/" target="_blank">Gray DJ. Diagnosis and Management of Schistosomiasis. BMJ   2011;342: d2651</a>`,
      ],
      level: "Easy",
      category: "Pulmonary Vascular Disease",
    }),

    //Q90
    Question_Answer.create({
      question: `Which of the following viral infections are most associated with development of Childhood Asthma?`,
      answerOptions: [
        `Respiratory Syncytial Virus [RSV] and HRV [Human rhinovirus]`,
        `HRV [Human rhinovirus] AND Norovirus`,
        `Respiratory Syncytial Virus [RSV], Coxsackievirus, and echovirus`,
        `Respiratory Syncytial Virus [RSV] AND Parvovirus B-19`,
      ],
      questionImage: [],
      correctAnswer: `Respiratory Syncytial Virus [RSV] and HRV [Human rhinovirus]`,
      explanation: `Many children have wheezing episodes associated with respiratory infections. For most infants, wheezing episodes with respiratory infections diminish as the child ages, but for some individuals, early-life wheezing episodes may mark the beginning of asthma.   Infections in early life can be “inducers” of wheezing or “protectors” against the development of allergic disease. The “hygiene” hypothesis has proposed that, for some infants, frequent, early life infections may protect against asthma. For at risk infants, i.e. offspring of parents with asthma or allergy, viral respiratory infections can provoke wheezing in early life which may “induce,” or be associated with the later development of asthma.

        Viral respiratory tract illnesses, particularly those due to infection with respiratory syncytial virus [RSV] and HRV [human rhinovirus] have frequently been associated with development of persistent wheezing and Childhood asthma. The two most important risk factors for development of asthma in Childhood has been the presence of allergic sensitization and wheezing during viral and possibly during bacterial respiratory tract illnesses.

        Human rhinoviruses are the most common viral infective agents in humans and are the predominant cause of the common cold. Note these are different from the Influenza virus. Coxsackievirus, echovirus, and enterovirus, belong to the group enteroviruses. They cause Many conditions their infections do not predispose to childhood asthma. They may be associated with wheezing in children but there is no data that they predispose to childhood asthma in late years. Coxsackie causes hand-foot-and-mouth disease affects the skin and mucous membranes, causing painful sores to appear inside the mouth, on the hands and feet, and occasionally on the buttocks or genitals. Epidemic pleurodynia (bornholm disease) is a disease caused by the Coxsackie B virus or other viruses affects the muscles, causing severe intermittent pain in the wall of the lower chest (adults) or upper abdomen.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/18565953/" target="_blank">Jackson DJ, Wheezing rhinovirus illnesses in early life predict asthma development in high-risk children Am J Resp Crit Care Med   2008 ; 178:667</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/18805338/" target="_blank">Sly PD. Early identification of atopy in the prediction of persistent asthma in children Lancet  2008; 372;1100</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/20847017/" target="_blank">Bisgaard H. Effects of glucosamine, chondroitin, or placebo in patients with osteoarthritis of hip or knee: network meta-analysis. BMJ 2010;341:C 1498</a>`,
      ],
      level: "Easy",
      category: "Asthma",
    }),

    //Q91
    Question_Answer.create({
      question: `Which of the following diseases is least likely to be associated with digital clubbing?`,
      answerOptions: [`IPF`, `COPD`, `Bronchiectasis`, `Lung cancer`],
      questionImage: [],
      correctAnswer: `COPD`,
      explanation: `Digital clubbing is deformity of fingers or toes associated with multiple diseases involving heart and lung. It presents as hypertrophic osteoarthropathy, described as increased distal fingertip mass and increased longitudinal and transverse nail plate curvature. Lung Cancer is the most common cause of clubbing associated with high levels of VEGF. Other common causes of clubbing include interstitial lung disease with idiopathic pulmonary fibrosis, bronchiectasis, lung abscess, mesothelioma and fibrous pleural tumors. Digital clubbing is not seen in COPD unless pulmonary hypertension, lung abscess and lung cancer is present.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/27104368/" target="_blank">Callemeyn J, Van Haecke P, Peetermans WE, Blockmans D. Clubbing and hypertrophic osteoarthropathy: insights in diagnosis, pathophysiology, and clinical significance. Acta Clin Belg. 2016 Jun;71(3):123-30</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/23460307/" target="_blank">Maggio M. Proton pump inhibitors and risk of 1-year mortality and rehospitalization in older patients discharged from acute care hospitals JAMA Intern Med. 2013; 173:518</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/17502537/" target="_blank">Gulmez SE, Holm A, Frederiksen H, et al. Use of proton pump inhibitors and the risk of community-acquired pneumonia: a population-based case-control study. Arch Intern Med. 2007;167:950-955</a>`,
      ],
      level: "Easy",
      category: "Other Pulmonary Diseases",
    }),

    //Q92
    Question_Answer.create({
      question: `Which of the following is associated in DM and considered risk of cancer?`,
      answerOptions: [
        `TIF-1 gamma and NPX-2`,
        `Anti Jo-1 and Anti RNP`,
        `Anti-SRP and Anti-Mi-2`,
        `Anti-PM SCL and Anti-Ku`,
      ],
      questionImage: [],
      correctAnswer: `TIF-1 gamma and NPX-2`,
      explanation: `Dermatomyositis (DM) is an idiopathic inflammatory myopathy characterized by proximal skeletal muscle weakness and characteristic skin rash. Previous reports have shown an association between DM and malignancies, including ovarian, lung, breast, nasopharyngeal, pancreatic, stomach, and colorectal cancer as well as malignant lymphoma (1,2). Serum autoantibodies in DM can indicate a positive or negative risk of malignancy; indeed, antibodies to transcription intermediary factor (TIF)-1 gamma [ Anti-TIF1y (anti-155/140) antibodies] and nuclear matrix protein (NPX)-2 indicate positive risks, while antisynthetase antibodies, anti­Mi-2 antibody, and anti-signal recognition particle (SRP) antibody indicate negative risks (3). Conversely, the presence of myositis-specific (anti-synthetase antibodies, anti-Mi-2, anti-SRP, and anti-MDA5) and myositis-associated antibodies (anti-RNP, anti-PM-Scl, anti-Ku) appears to be associated with a decreased risk of malignancy but an increased risk of interstitial lung disease in DM (4).
        Antisynthetase syndrome (ASS) is characterized by the presence of anti-aminoacyl tRNA synthetase (anti-ARS) autoantibodies and clinical symptoms of myositis (frequency: 78-91%), interstitial lung disease (JLP) (90%), Raynaud's phenomenon (62%), arthritis (64-83%), a fever (20%), and mechanic's hands (17-71%) (5). Aminoacyl-tRNA synthetases are enzymes that catalyze the binding of amino acids to their corresponding tRNAs. Antibodies to eight different tRNA synthetase have been reported: anti-histidyl (Jo-1), threonyl (PL-7), alanyl (PL-12), glycyl (EJ), isoleucyl (OJ), asparaginyl (KS), phenylalanyl(Zo), and tyrosyl (YRS) tRNA synthetase antibodies (6). Anti-ARS antibodies except for anti-Jo-1 antibodies are usually found in <5% of polymyositis and dermatomyositis (PM/DM) patients (7). One possible explanation is related to the presence of autoantibodies against aminoacyl-transfer synthetases, which is a common feature of ILD and appears to be protective against malignancies.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/20453490/" target="_blank">Szekanecz Z, Szekanecz E, Bako G, Shoenfeld Y. Malignancies in autoimmune rheumatic diseases - a mini-review. Gerontology 57: 3-10, 2011.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/25641317/" target="_blank">Findlay AR, Goyal NA, MozaffarT. An overview of polymyositis and dermatomyositis. Muscle Nerve 51: 638-656, 2015.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/21953614/" target="_blank">Trallero-Araguas E, Rodrigo-Pendas .JA, Selva-O'Callaghan A, 1V[artinez-G6mez X, Bosch X, Labrador-Horrillo M, et al. Usefulness of anti-p1.55 autoantibody for diagnosing cancer-associated dermatomyositis: a systematic review and meta-analysis.Arthritis Rheum. (2012) 64:523-32. doi: 10.1002/ art.33379]</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/17392346/" target="_blank">Chinoy H, Fertig N, Oddi:. CV, OIiier WE, Cooper RG. The diagnostic utility of myositis autoantibody testing for prec􀄹icting the risk of cancer--associated myositis. Ann Rheum Dis. 2007 Oct;66(10):1345-9.]</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/17392346/" target="_blank">Chinoy H, Fertig N, Odd is CV, OIiier WE, Cooper RG. The diagnostic utility of myositis autoantibody testing for predicting the risk of cancer-associated myositis. Ann Rheum Dis 66: 1345-1349, 2007.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/21455765/" target="_blank">Katzap E, Barilla-LaBarca M-L, Marder G. Antisynthetase syndrome. Curr Rheumatol Rep 13: 175-181, 2011.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/17917530/" target="_blank">Mimori T, lmura Y, Nakashima R, Yoshifuji H. Autoantibodies in idiopathic inflammatory myopathy: an update on clinical and pathophysiological significance. Curr Opin Rheumatol 19: 523- 529, 2007.</a>`,
      ],
      level: "Hard",
      category: "Interstitial Lung Diseases",
    }),

    //Q93
    Question_Answer.create({
      question: `A 65-year-old farmer has breathlessness. During investigation he was found to have raised precipitins to micropolyspora faeni. What is the most likely diagnosis?`,
      answerOptions: [
        `Tuberculosis`,
        `Wegner’s granulomatosis`,
        `Churg Strauss syndrome`,
        `Hypersensitivity pneumonitis`,
      ],
      questionImage: [],
      correctAnswer: `Hypersensitivity pneumonitis`,
      explanation: `Hypersensitivity pneumonitis (HP) is allergic granulomatous interstitial lung disease caused by exposure to organic dust antigens, chemicals, animal proteins or microorganisms. Micropolyspora faeni is one of the contributing agents responsible for HP that produces IgG antibodies in the serum. Diagnosis of HP can be recognized with pulmonary function testing, chest radiograph and specific antibodies to organic antigens known to cause the disease.

          Tuberculosis is caused by bacterium Mycobacterium tuberculosis that affects the lungs.

          Wegner’s granulomatosis (WG) is a rare disease that causes inflammation of small to Medium vessels affecting respiratory tract and kidneys. Staphylococcus aureus is involved in the pathogens of WG.

          Churg Strauss syndrome is inflammation of small to Medium blood vessels which presents with asthma, and high levels of eosinophils. Organ systems affected by this disease include gastrointestinal tract, skin, heart and nervous system. 50% of patients have antineutrophil cytoplasmic antibodies (ANCAs), usually with a specificity for myeloperoxidase (MPO).
          `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/26310038/" target="_blank">Spagnolo P, Rossi G, Cavazza A, Bonifazi M, Paladini I, Bonella F, Sverzellati N, Costabel U. Hypersensitivity Pneumonitis: A Comprehensive Review. J Investig Allergol Clin Immunol. 2015;25(4):237-50</a>`,
      ],
      level: "Hard",
      category: "Interstitial Lung Diseases",
    }),

    //Q94
    Question_Answer.create({
      question: `Which of the following diseases is associated with Sarcoidosis?`,
      answerOptions: [
        `Active hepatitis disease (HBV or HCV)`,
        `Kawasaki's disease`,
        `Primary Biliary Cirrhosis`,
        `Celiac Disease`,
      ],
      questionImage: [],
      correctAnswer: `Celiac Disease`,
      explanation: `Celiac disease is a systemic immune mediated disorder triggered by dietary gluten in genetically susceptible persons. It is more common in women, patients with type 1 diabetes [3-16%], Hashimoto's thyroiditis, Sjogren syndrome, IgA nephropathy [3%] and IgA deficiency [9%]. Patients present with weight loss diarrhea and abdominal distention, have reduced bone mineral density, high aminotransferase levels, short stricture. Patients have a high incidence of dermatitis herpetiformis. Enteropathy associated with T-cell lymphoma and adenocarcinoma of jejunum are rare complications. Measurement of serum IgA anti-tissue transglutaminase antibodies recommended an established diagnosis. Measurement of IgA in the endomysial antibodies is barely 100% specific for active celiac disease.

        An association between sarcoidosis and celiac disease [CD]  has been also described. Although the mechanisms involved remain unclear, both diseases seem to share some immunological and genetic disorders. Indeed, the susceptibility of developing both sarcoidosis and CD has been linked to the class II haplotype HLA-DR3, DQ2 and B8. It is also possible that, by increasing the expression of class II HLA molecules, the diseases predispose to each other. Thus, the presence of CD may increase the risk of sarcoidosis development and vice versa. In detail, CD has been associated with an increased risk of sarcoidosis (HR = 4.03; 95% CI = 2.32–7.00). Similarly, a prior sarcoidosis diagnosis is associated with an increased risk of CD with an OR of 3.58 (95% CI = 1.98–6.45). Nevertheless, sarcoidosis often occurs in older subjects, while CD is more frequently observed in young people.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/23252527/" target="_blank">Fasano A. Celiac Disease. Engl J Med 2012; 367:2419-2426</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/23984314/" target="_blank">D'Ercole C. Celiac Disease and Autoimmune-Associated Conditions. Biomed Rest Int. 2013; 2013:127589</a>`,
      ],
      level: "Easy",
      category: "Interstitial Lung Diseases",
    }),

    //Q95
    Question_Answer.create({
      question: `All of the following factors are associated with development of delirium in the medical intensive care unit except:`,
      answerOptions: [
        `Pre-existing dementia`,
        `History of systemic hypertension and or history of Alcoholism`,
        `History of Coma`,
        `It is unrelated to severity of illness admission`,
      ],
      questionImage: [],
      correctAnswer: `It is unrelated to severity of illness admission`,
      explanation: `A delirium is a syndrome characterized by acute onset of cerebral dysfunction with a change of fluctuation in baseline mental status inattention and either disorganized thinking or an altered level of consciousness. The cardinal features of delirium are [1] distal nerve consciousness with the change in ability to focus [2] either changing cognition [e.g. memory deficit, disorientation, language disturbance] or the development of a perceptual disturbance [hallucinations, delusions]. Other symptoms of hearing delirium include sleep disturbance, abnormal psychomotor activity, emotional disturbances [depression, anxiety]. Hyperactive delirium is more commonly associated with hallucination and delusions, while hyperactive delirium is more often characterized by confusion and is often misdiagnosed in ICU patients. Delirium is related to severity of illness. It is also well known that Coma is independent risk factor for delirium in the ICU. `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/23269131/" target="_blank">Barr J, Fraser GL, Puntillo K, Ely EW. Clinical practice guidelines for the management of pain, agitation, and delirium in adult patients in the intensive care unit.Critical Care Medicine, 2013; 419(1): 263-306</a>`,
      ],
      level: "Moderate",
      category: "Critical Care",
    }),

    //Q96
    Question_Answer.create({
      question: `Which of the following sedating medications has the lowest risk of respiratory depression?`,
      answerOptions: [`Propofol`, `lorazepam`, `Midazolam`, `Dexmedetomidine`],
      questionImage: [],
      correctAnswer: `Dexmedetomidine`,
      explanation: `Benzodiazepines activate, GABA -aminobutyric acid a [GABAA receptors]

            Receptors in the brain. They have anxiolytic, amnestic, sedating hypnotic and anticonvulsant activities. Their amnestic effects extend beyond the sedating effects. Lorazepam is more potent than Midazolam which is more potent than Diazepam.

            Propofol is an IV sedative that binds to multiple receptors and the central nervous system including GABA, glycine, nicotine, and M1 muscarinic receptors. Propofol has sedative, hypnotic, anxiolytic, amnestic, antiemetic and anticonvulsant properties, but no analgesic effects. Dexmedetomidine is selective alpha2 receptor agonists with sedative, analgesic/opioid sparing, sympatholytic properties, but no anticonvulsant properties. Patient sedated with eczema to being more easily arousable interactive with minimal respiratory depression.   
            `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/23269131/" target="_blank">Barr J, Fraser GL, Puntillo K, Ely EW. Clinical practice guidelines for the management of pain, agitation, and delirium in adult patients in the intensive care unit.Critical Care Medicine, 2013; 419(1): 263-306</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/10730549/" target="_blank">Bhana N. Dexmedetomidine. Drugs, 2000;59(2):263-8</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/12665397/" target="_blank">McKeage K. Propofol: a review of its use in intensive care sedation of adults. CNS Drugs 2003(4);17:235-72</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/11762264/" target="_blank">Young CC. Benzodiazepines in the intensive care unit. Crit Care Clin  2001;17(4):843-62</a>`,
      ],
      level: "Moderate",
      category: "Pharmacology",
    }),

    //Q97
    Question_Answer.create({
      question: `Following are true of Biologic therapies except:`,
      answerOptions: [
        `Live virus vaccines can be safely be given to patients receiving these medicines`,
        `May result in activation of   latent tuberculosis leading to active Tuberculosis`,
        `Progressive multifocal leukoencephalopathy (PML), a rare brain infection, has been reported with use of some of these medications`,
        `There is risk of nonmelanoma skin cancers`,
      ],
      questionImage: [],
      correctAnswer: `Live virus vaccines can be safely be given to patients receiving these medicines`,
      explanation: `Biologic agents are molecules of biological origins, used therapeutically. Most of these agents are based on antibodies or receptor proteins, which may be biologically modified to attempt to make them less immunogenic to humans. They work through the immune system and thus their actions are specific and targeted. They have been used in Oncology and Autoimmune diseases.

        Examples of biologic agents are: interferon (IFN), interleukin, colony stimulating factors, (CSF), monoclonal antibodies (MoAb). Other commonly used such medications are Rituximab acts against CD 20 protein used in Rheumatoid Arthritis Etanercept [Enbrel], Infliximab [Remicade], Adalimumab [Humira] are various kinds of Tumor necrosis factor inhibitors- have been used in Psoriasis and as well as Rheumatoid Arthritis. There have been some reports of serious infections associated with infliximab, adalimumab, and certolizumab use, including tuberculosis (TB) and sepsis.

        Progressive multifocal leukoencephalopathy (PML), a rare brain infection caused by JC virus. It occurs almost exclusively in people with severe immune deficiency, such as transplant patients on immunosuppressive medications or those with AIDS.  It has also been reported with use of some biologic agents like those, receiving natalizumab (Tysabri) for multiple sclerosis, on long-term efalizumab (Raptiva) for psoriasis. Live Virus vaccination is contraindicated in patients using biologic agents.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/21624184/" target="_blank">Tak PP. Advances in rheumatology: new targeted therapeutics. Arthritis Res Ther 2011, 13: S5.</a>`,
      ],
      level: "Hard",
      category: "Pharmacology",
    }),

    //Q98
    Question_Answer.create({
      question: `Which of the following is true of the Lambert-Eaton myasthenic syndrome? (LEMS)`,
      answerOptions: [
        `LEMS is most commonly seen with adenocarcinoma of the lung`,
        `Cranial nerve involvement may be seen in this`,
        `LEMS is characterized by decreased action potential amplitude with repeated nerve stimulation`,
        `Proximal weakness is uncommon`,
      ],
      questionImage: [],
      correctAnswer: `Cranial nerve involvement may be seen in this`,
      explanation: `Lambert-Eaton myasthenic syndrome is most seen with small cell carcinoma The pathology is due to the generation of antibodies against voltage-gated calcium channels (VGCC) on presynaptic nerve terminals leading to a decrease in the neurotransmitter acetylcholine (ACh).

            Muscle involvement is usually symmetrical and usually involves proximal groups rather than distal. Electromyography reveals an increase in action potential amplitude with repeated stimulation.
            `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.ncbi.nlm.nih.gov/books/NBK507891/" target="_blank">Jayarangaiah A, Theetha Kariyanna P. Lambert Eaton Myasthenic Syndrome. [Updated 2020 Jul 15]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2020 Jan-.</a>`,
      ],
      level: "Hard",
      category: "Other Pulmonary Diseases",
    }),

    //Q99
    Question_Answer.create({
      question: `A 19-year-old male presents to the emergency room complaining of dyspnea, cough, chest pain, wheezing, chest tightness and rhinorrhea.  He has a past medical history of asthma, chronic sinusitis and allergic rhinitis.  On physical examination he found to be a tall, thin male who is found to have tachycardia and tachypnea.  On palpation you feel a crunching over the sternal bridge. You suspect the possibility of spontaneous pneumomediastinum
        which is confirmed by X-ray. Which one of the following symptoms is MOST specific for pneumomediastinum?`,
      answerOptions: [
        `Wheezing`,
        `Chest Pain`,
        `Rhinolalia`,
        `Chest Tightness`,
      ],
      questionImage: [],
      correctAnswer: `Rhinolalia`,
      explanation: `Pneumomediastinum also referred to as mediastinal emphysema is defined as presence of free air in the mediastinal cavity. The discovery of free air in the mediastinal cavity is often thought of as a phenomenon secondary to a more serious complication. 

        Pneumomediastinum is commonly seen as a result of trauma or caused iatrogenically due to endoscopies or other therapeutic procedures. Such cases are referred to as secondary pneumomediastinum, with a clear and causative factor.  In instances where pneumomediastinum is discovered without a clear etiology, which is referred to as spontaneous mediastinum (SPM).

        The most common presenting symptoms are chest pain, dyspnea, cough, neck pain, dysphagia. There were also sporadic complaints of odynophagia, lightheadedness, weakness, dysphonia, back pain, rhinolalia [nasal tone in speech] and epigastralgia [Pain in the epigastric region].

        Patients diagnosed to have SPM tend to be young, thin, males who present with arbitrary symptoms of chest pain, cough and dyspnea. Due to the vague nature of these symptoms, early therapeutic measures and lack of radiological investigations, SPM may be precluded from the differential. It has been estimated that up to 30% or more cases of SPM may go undiagnosed.    

        Spontaneous mediastinum is often seen in a setting of a pre-existing pulmonary condition.  A history of asthma and associated coughing bouts has been reported as a possible factor in the development of SPM in up to 50% of cases.  Chronic obstructive pulmonary disease (COPD), interstitial lung disease (ILD) and recent history of an upper respiratory tract infection have also all been reported.  As any of these pulmonary conditions can cause extra-alveolar air accumulations such due to further reduced intra-thoracic pressures that are associated with reduced lung compliance making patients more prone to development of SPM.

        SPM has also been linked to certain triggering events such as bouts of emesis, retching, cough and physical sporting activities.    Though uncommon, SPM has also been identified in situations such as childbirth, forceful straining during exercise, straining at passing stool, coughing, and sneezing.
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/24083220/" target="_blank">Sahni S., Verma S., Talwar A., Spontaneous Pneumomediastinum: Time for Consensus. N Am J Med Sci. 2013 Aug; 5(8):460-464</a>`,
      ],
      level: "Moderate",
      category: "Pleural Diseases",
    }),

    //Q100
    Question_Answer.create({
      question: `A 42-year-old male is evaluated for a fibro-cavitary lesion in the right upper lobe. He reports fever, low grade and weight loss for the last three months. He has h/o Diabetes, End Stage Renal disease [ESRD] and is on hemodialysis. His tuberculin skin test is negative, but sputum culture does show evidence of acid-fast bacilli. You decide to treat him for pulmonary tuberculosis. Which of the following drugs should the physician be careful while prescribing anti tubercular medications in a patient with renal failure on hemodialysis?`,
      answerOptions: [
        `Isoniazid`,
        `Rifampicin`,
        `Pyrazinamide`,
        `Fluoroquinolone`,
      ],
      questionImage: [],
      correctAnswer: `Pyrazinamide`,
      explanation: `The patient has diabetes and renal failure conditions that increase the risk of M. tuberculosis infection. The negative tuberculin test reflects this due to general anergy which is common in patients with renal disease. Isoniazid and Rifampicin are not cleared by hemodialysis therefore standard dosing should be used. Pyrazinamide is cleared by hemodialysis hence it should be administered after hemodialysis. Please note there are case reports of blindness after ethambutol in patients with ESRD. One may consider substituting a fluoroquinolone for Ethambutol.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/12535299/" target="_blank">Hussein MM. Tuberculosis and chronic renal disease.Semin Dial 2003;16(1):38-442.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/15287205/" target="_blank">Fang JT.Ethambutol-induced optic neuritis in patients with end stage renal disease on hemodialysis: two case reports and literature review.Renal Failure 2004;26(4):189-93</a>`,
      ],
      level: "Hard",
      category: "Infection",
    }),

    //Q101
    Question_Answer.create({
      question: `In which of the following patients the Vital Capacity is decreased with near normal Total Lung Capacity?`,
      answerOptions: [`picture 1`, `picture 2`, `picture 3`, `picture 4`],
      questionImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q101/Q101+img1.jpg`,

        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q101/Q101+img2.jpg`,

        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q101/Q101+img3.png`,

        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q101/Q101+img4.png`,
      ],
      correctAnswer: `picture 2`,
      explanation: `Unilateral diaphragm dysfunction
        Patient A has emphysema like seen on the left sided bullous disease, her PFT will show an obstructive defect. Patient C has Pleural effusion and patient D has interstitial lung disease. In both Patient A and D, the cases of PFT will show a restrictive defect (↓ FVC, ↓ ↓ TLC), patient B has left diaphragm paralysis. The chest x-ray shows an elevated left diaphragm. Unilateral diaphragm weakness is usually associated with a mild decrease in vital capacity (VC), to approximately 75% of the predicted value [1,2], with a further 10% to 20% decrease in the supine position [2], while functional residual capacity (FRC) and total lung capacity (TLC) are usually preserved [1,2]. In bilateral diaphragm weakness, VC usually reaches mean values of approximately 50% predicted and can further decrease by 30% to 50% when supine [3]. TLC can also be reduced, while residual volume (RV) can be elevated [4].
        `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/3752705/" target="_blank">Lisboa C, Paré PD, Pertuzé J, Contreras G, Moreno R, Guillemi S, Cruz E, Inspiratory muscle function in unilateral diaphragmatic paralysis. Am Rev Respir Dis. 1986 Sep; 134(3):488-92</a>`,
        `<a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC461156/" target="_blank">Laroche CM, Mier AK, Moxham J, Green M, Diaphragm strength in patients with recent hemidiaphragm paralysis. Thorax. 1988 Mar; 43(3):170-4.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/3202460/" target="_blank">Laroche CM, Carroll N, Moxham J, Green M, Clinical significance of severe isolated diaphragm weakness. Am Rev Respir Dis. 1988 Oct; 138(4):862-6.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/3354995/" target="_blank">Mier-Jedrzejowicz A, Brophy C, Moxham J, Green M, Assessment of diaphragm weakness. Am Rev Respir Dis. 1988 Apr; 137(4):877-83</a>`,
      ],
      level: "Hard",
      category: "Pulmonary Function Testing",
    }),

    //Q102
    Question_Answer.create({
      question: `You note that in Contrast to men, the predominant risk factor for sleep apnea in women is`,
      questionImage: [],
      answerOptions: [
        `Family history`,
        `Body mass index (BMI)`,
        `Postmenopausal State`,
        `Nasal obstruction`,
      ],
      correctAnswer: `Postmenopausal State`,
      explanation: `Obstructive sleep apnea is a disorder caused by repetitive sleep-induced collapse of the pharyngeal airway. One of the predominant risk factors for sleep apnea in women is postmenopausal state due to progesterone levels. Progesterone is a powerful respiratory stimulant that prevents sleep disturbances and can help stabilize nocturnal breathing. Also, when progesterone increases respiratory drive, airways are protected due to enhancement of upper airway dilator muscle activity. In reverse, when progesterone increases ventilatory drive there is a risk of upper air collapse.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/9480969/" target="_blank">Popovic RM, White DP. Upper airway muscle activity in normal women: influence of hormonal status. J Appl Physiol 1998; 84: 1055–1062.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/21289261/" target="_blank">Caufriez A, Leproult R, L'Hermite-Balériaux M, et al. Progesterone prevents sleep disturbances and modulates GH, TSH, and melatonin secretion in postmenopausal women. J Clin Endocrinol Metab 2011; 96: E614–E623.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/9480969/" target="_blank">Popovic RM, White DP. Upper airway muscle activity in normal women: influence of hormonal status. J Appl Physiol 1998; 84: 1055–1062</a>`,
      ],
      level: "Moderate",
      category: "Sleep",
    }),

    //Q103
    Question_Answer.create({
      question: `Tranexamic acid is used to  control  active hemorrhage .  Which of the following is false regarding the use of tranexamic acid  when used to control active hemorrhagic processes?`,
      questionImage: [],
      answerOptions: [
        `It can decrease mortality in surgical trauma patients with bleeding`,
        `It inhibits the interaction of plasminogen with fibrin`,
        `Nebulized tranexamic when used to treat hemoptysis does not decrease the need for Interventional pulmonary or Interventional Radiology procedure`,
        `It is a derivative of the AA lysine `,
      ],
      correctAnswer: `Nebulized tranexamic when used to treat hemoptysis does not decrease the need for Interventional pulmonary or Interventional Radiology procedure`,
      explanation: `Tranexamic acid is an antifibrinolytic drug that has become progressively more commonly used in the surgical field. It works by blocking the lysine binding site in plasminogen and prevents its binding to fibrin. It has substantial benefit in decreasing the risk of death in both surgical trauma patients as well as decreasing the risk of hemorrhage related death in postpartum patients [1]. It has shown  efficacy in a range of bleeding complications if given early in the course. The risk of thromboembolic disease does not appear to be increased with treatment.
      Management of active Hemoptysis  typically  requires  reversing any coagulopathy in addition to  maintaining oxygenation of the patient. However persistent or significant bleeding will usually require invasive measures to both localize and treat the source of bleeding (including cold saline, topical epinephrine, balloon tamponade and argon plasma coagulation) .Nebulized Tranexamic acid has also been used to treat active hemoptysis.
      Wand et.al. studied  nebulized tranexamic acid in patients without massive hemoptysis or respiratory insufficiency[2]  . Resolution of hemoptysis at 5 days was substantially higher compared to placebo. There was also decreased need for bronchoscopy or angiographic embolization. This appears to be a useful option in stable patients with hemoptysis.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/25797505/" target="_blank">Ng W, Jerath A, Wąsowicz M. Tranexamic acid: a clinical review. Anaesthesiol Intensive Ther. 2015;47(4):339-50</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/30321510/" target="_blank">Wand O, Guber E, Guber A, et.al. Inhaled Tranexamic Acid for Hemoptysis Treatment: A Randomized Controlled Trial. Chest. 2018 Dec;154(6):1379-1384</a>`,
      ],
      level: "Hard",
      category: "Other Pulmonary Diseases",
    }),

    //Q104
    Question_Answer.create({
      question: `An 85 -year-old man underwent right hip replacement one week ago and now has been transferred back from the rehabilitation nursing home with swelling of right leg to the emergency room. No h/o nausea, vomiting. He does complain of pain in the right calf region. His nursing home records reveal temp of 39 degree centigrade, pulse 107/min, regular, blood pressure 120/70, and oxygen saturation 94% at room air.   He has no past history of deep vein thrombosis.  You suspect the patient has pulmonary embolism [PE]. Which of the following is the most appropriate test at this time?`,
      questionImage: [],
      answerOptions: [
        `Transesophageal echocardiography`,
        `CT angiography of the chest`,
        `Chest X ray`,
        `D-dimer assay`,
      ],
      correctAnswer: `CT angiography of the chest`,
      explanation: `Of all the given choices multidetector CT angiography seems most appropriate. Its clinical validity for diagnosing pulmonary embolism is the same as that of pulmonary angiography or ventilation perfusion scanning.  CT angiogram also helps detect alternative diagnoses (pneumonia, pleural effusion etc.)  The chests X-ray   is negative in patients with PE. D-dimer is a fibrin degradation product, a small protein fragment detectable in blood after blood clot is degraded   by fibrinolysis. It is more useful for ruling out venous thromboembolism and positive results are not that helpful. D-dimers can also be positive in patients with impaired renal function, post-operative period, atrial fibrillation etc. Hence, D-dimers will not be useful in the present scenario. Transesophageal echocardiography may reveal right ventricle dysfunction but is not helping in diagnosing pulmonary embolism.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/16738268/" target="_blank">Stein PD. Multidetector Computed Tomography for Acute Pulmonary Embolism.N Engl J Med 2006; 354:2317-2327</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/15096330/" target="_blank">Stein PD. D-dimer for the exclusion of acute venous thrombosis and pulmonary embolism: a systematic review. Ann Intern Med.2004;140(8):589-602</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/2332918/" target="_blank">The PIOPED Investigators.  Value of the ventilation/perfusion scan in acute pulmonary embolism. Results of the prospective investigation of pulmonary embolism diagnosis (PIOPED).</a>`,
      ],
      level: "Easy",
      category: "Pulmonary Vascular Disease",
    }),

    //Q105
    Question_Answer.create({
      question: `Serum ACE level is not increased in which of the following:`,
      questionImage: [],
      answerOptions: [
        `Berylliosis`,
        `Silicosis`,
        `Sarcoidosis`,
        `Bronchogenic Carcinoma`,
      ],
      correctAnswer: `Bronchogenic Carcinoma`,
      explanation: `Angiotensin converting enzyme (ACE) is an enzyme that converts angiotensin I to angiotensin II. ACE indirectly causes higher blood pressure as it produces a substance that narrows your blood vessels leading to constriction. Higher levels of ACE can be used in diagnosing sarcoidosis but is not a specific finding. Other diseases associated with higher ACE levels include, alcoholic cirrhosis, primary biliary cirrhosis, inflammatory bowel disease, coccidioidomycosis, berylliosis, histoplasmosis, silicosis, asbestosis, hyperthyroidism and miliary tuberculosis.

      Low levels of ACE have been seen with bronchogenic carcinoma.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/2556234/" target="_blank">Lieberman J. Enzymes in sarcoidosis. Angiotensin-converting-enzyme (ACE). Clin Lab Med. 1989 Dec;9(4):745-55. PMID: 2556234</a>`,
      ],
      level: "Easy",
      category: "Interstitial Lung Diseases",
    }),

    //Q106
    Question_Answer.create({
      question: `Which of the following relationships between Obesity [BMI > 30] and atrial fibrillation are true?`,
      questionImage: [],
      answerOptions: [
        `Left Atrial size has no relation to BMI`,
        `Left ventricular diastolic dysfunction is not more common in obese patients`,
        `Obesity predicts progression of paroxysmal AF to permanent AF`,
        `There is no relationship between AF recurrence after electro cardioversion and obesity`,
      ],
      correctAnswer: `Obesity predicts progression of paroxysmal AF to permanent AF`,
      explanation: `Obesity is strongly correlated to left atrial size. LA enlargement predicts the development of atrial fibrillation.  Obesity also predicts development of left ventricular diastolic dysfunction which is also correlated with AF.  Obesity increases the risk of AF recurrence after electro cardioversion and also seems to increase the risk of progression of paroxysmal AF to permanent AF. Of all the components of metabolic syndrome [obesity type 2 diabetes mellitus dyslipidemia hypertension] obesity seems to be most strongly related to development of AF.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/19460605/" target="_blank">Lavie CJ. Obesity and cardiovascular disease: risk factor, paradox, and impact of weight loss. J Am Coll Cardiol 2009; 53(21):1295-32</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/23541013/" target="_blank">Menzes AR. Atrial fibrillation in the 21st century: a current understanding of risk factors and primary prevention strategies. Mayo Clin Proc; 2013 Apr;88(4):394-409</a>`,
      ],
      level: "Easy",
      category: "Sleep",
    }),

    //Q107
    Question_Answer.create({
      question: `A 32-year-old woman presents with chest pain and exertional dyspnea of 8 days duration. Her medical history is significant for a normal spontaneous vaginal delivery two months ago, after which she has had frequent episodes of dark bloody vaginal discharge. The most recent bleeding episode was 2days ago. The patient denies fever, chills, hemoptysis, dyspnea, or leg pain. She was a smoker in her teenage years but quit 10 years ago. She is a social drinker but denies use of any illicit drugs. Her temperature is 37.5°C, pulse is 88/min, blood pressure is 110/72 mm Hg and respirations are 18/min. Examination shows clear lungs. Pelvic examination shows an enlarged uterus. Complete blood count and serum electrolytes are within normal limits. CT chest identifies 5 pulmonary nodules in the lung fields the largest is 3.5 cm in size. In addition, there are two liver nodules that are 1.0 cm in size. Which of the following investigations will be most helpful in establishing diagnosis?`,
      questionImage: [],
      answerOptions: [
        `CT guided of the liver nodule`,
        `Stress Echocardiogram`,
        `Quantitative beta HCG`,
        `Pulmonary function tests`,
        `CT guided biopsy of the largest lung nodules`,
      ],
      correctAnswer: `Quantitative beta HCG`,
      explanation: `Gestational trophoblastic disease (GTD) is a heterogeneous group of diseases arising from an abnormal proliferation of trophoblastic tissue and includes hydatidiform mole, choriocarcinoma, placental site trophoblastic tumor (PSTT) and epithelioid trophoblastic tumor (ETT). Abnormal uterine bleeding (AUB) may be part of the clinical presentation after pregnancy. The lung is the most common site of metastases. Patients with GTD, particularly invasive mole or choriocarcinoma, may have high hCG levels.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/15196847/" target="_blank">Soper JT, Mutch DG, Schink JC; American College of Obstetricians and Gynecologists. Diagnosis and treatment of gestational trophoblastic disease: ACOG Practice Bulletin No. 53. Gynecol Oncol. 2004 Jun;93(3):575-85.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/30306586/" target="_blank">Ngan HYS, Seckl MJ, Berkowitz RS, Xiang Y, Golfier F, Sekharan PK, Lurain JR, Massuger L. Update on the diagnosis and management of gestational trophoblastic disease. Int J Gynaecol Obstet. 2018 Oct;143 Suppl 2:79-85</a>`,
      ],
      level: "Hard",
      category: "Lung Cancer",
    }),

    //Q108
    Question_Answer.create({
      question: `A 33-year-old man comes to the clinic with complaints of shortness of breath associated with coughing for the past month. Patient drinks two cans of beer every day and smokes half a pack for the past 12 years. On physical examination, patient is afebrile, blood pressure 125/85mmH g, respiratory rate-18 breaths/min, pulse is 86 beats/min and regular and pulse oximetry 92% on room air. Cardiovascular examination shows normal S1, S2 and no murmurs. On auscultation of the lungs, crackles are heard on the left base. Chest x-ray and the representative CT Scan films  are provided.  Broncho alveolar lavage reveals 55% lipid laden macrophages and 40% lymphocytes. Based on these findings, what is possible diagnosis?`,
      questionImage: [
        "https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q108/Q108+img1.png",
        "https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q108/Q108+img2.png",
      ],
      answerOptions: [
        `Eosinophilic pneumonia`,
        `Bacterial pneumonia`,
        `Hypersensitivity pneumonitis`,
        `Acute lipoid pneumonia`,
      ],
      correctAnswer: `Acute lipoid pneumonia`,
      explanation: `Lipoid pneumonia is most commonly reported after aspiration of ingested mineral oil. Patients presenting with this condition typically have a history of e-cigarette usage containing nicotine, and marijuana oil or concentrate. CT scan finding of lipoid pneumonia will show ground-glass opacities, crazy paving pattern, interlobular thickening and nodular consolidation. Flexible bronchoscopy with bronchoalveolar lavage (BAL) can be helpful in diagnosing acute lipoid pneumonia, which can show lipid laden macrophages present in this patient. Corticosteroid therapy has been proven to benefit patients. Acute eosinophilic pneumonia (AEP) typically presents with patients with progressive dyspnea less than one month and chest imaging of diffuse parenchymal opacities. Diagnosis established with BAL typically show eosinophilia (>25%  eosinophils). Management of AEP includes supportive care with oxygen, empiric antibiotics until available culture results and systemic glucocorticoid therapy. The Chest X ray in  Bacterial Pneumonia will show  lobar consolidation.. Treatment in these cases should be aimed at managing the underlying infection. Hypersensitivity pneumonitis is an immune-mediated reaction in response to the inhalation of various antigens containing organic dust and chemicals. In acute cases, chest CT may reveal ground-glass opacities with mosaic pattern. In chronic cases, chest CT is more likely to show a reticular pattern of fibrosis, air trapping and bronchiectasis. BAL may show lymphocytosis.
      Patients with subacute Hypersensitivity pneumonitis will benefit from corticosteroids. Patients with chronic Hypersensitivity pneumonitis  may require immunosuppression treatment.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/31583455/" target="_blank">Dicpinigaitis PV, Trachuk P, Fakier F, Teka M, Suhrland MJ. Vaping-Associated Acute Respiratory FailureDue to Acute Lipoid Pneumonia. Lung 2019.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/16434894/" target="_blank">Churg A, Muller NL, Flint J, Wright JL. Chronic hypersensitivity pneumonitis. The American journal of surgical pathology 2006;30:201-8.4.</a>`,
      ],
      level: "Hard",
      category: "Other Pulmonary Diseases",
    }),

    //Q109
    Question_Answer.create({
      question: `A 63-year-old mechanic comes to the emergency room accompanied by his wife complaining of high fever, malaise, and nausea since morning. He became weak and could not get out of bed by himself. He has a history of type 2 Diabetes Mellitus. He drinks 2 glasses of wine daily. Temperature 101.1F, blood pressure 135/85, and pulse 110/min. Pulse oximetry is 94% on room air. Cardiac examination was normal except tachycardia /Chest X-ray shows interstitial infiltrates, Laboratory results were normal. Patient had a positive rapid flu test and was diagnosed with influenza and was started with a drug and viral titer were sent. Which of the following drugs show maximum reduction in viral titers in less than 24 hours?`,
      questionImage: [],
      answerOptions: [`Favipiravir`, `Baloxavir`, `Pimodivir`, `Oseltamivir`],
      correctAnswer: `Baloxavir`,
      explanation: `Influenza is a highly contagious virus. The major viral glycoproteins that help the virus to enter the target cell are hemagglutinin and neuraminidase. There are several drugs being used to target these virulence factors. Oseltamivir is the drug of choice to treat influenza. Oseltamivir is a neuraminidase inhibitor that prevents the release of viral particles from the infected cell. Typically, 75 mg BID for 5 days is sufficient to reduce the duration of symptoms, however the exact dosage may vary depending upon comorbid conditions [1,2]. It has peak efficacy if given within 48 hours of symptom onset, though studies have shown its efficacy even when given beyond this window [3]. Oseltamivir takes 5 days to reduce the viral load [1]. As symptoms of influenza can range from mild to severe, trials have been conducted to find a drug that decreases viral load in fewer days.  Studies show that baloxavir decreases viral load within 24 hours with a single dose of 40mg for weight <80 kg and 80 mg for weight >80 kg patients [ 4]. Patients who take baloxavir within 24 hours of symptom onset have greater benefit from the drug compared to those who start later [4],[5]. Baloxavir inhibits cap-dependent endonuclease activity of influenza polymerase, blocking the ability of viruses to make copies of itself within an infected cell. It is indicated for treatment of acute uncomplicated Influenza in patients above the age of 12 who have symptoms for no more than 48 hours [4]. Favipiravir is efficacious within the first 96 hours of symptom onset; however, it is less effective within the first 24 hours when compared to baloxavir [5]. Favipravir inhibits viral replication through selective inhibition of viral RNA polymerase. When compared to a standard regimen of treatment TID, favipiravir was shown to be more efficacious using 1800mg BID on day 1 and 800 mg BID on days 2-5[4]. Pimodivir is still in phase 3 testing [4]. Pimodivir works by inhibiting the polymerase basic protein 2 (PB2) cap-binding subunit of influenza A [4]. A dose of 600 mg BID for 5 days has been shown to decrease viral load in adult patients with acute, uncomplicated seasonal influenza A [4].`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/24268590/" target="_blank">Fry AM, Goswami D, Nahar K, et al. Efficacy of oseltamivir treatment started within 5 days of symptom onset to reduce influenza illness duration and virus shedding in an urban setting in Bangladesh: a randomised placebo-controlled trial. The Lancet Infectious diseases 2014; 14:109-18.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/20215131/" target="_blank">Dutkowski R. Oseltamivir in seasonal influenza: cumulative experience in low- and high-risk patients. The Journal of antimicrobial chemotherapy 2010;65 Suppl 2:ii11-ii24.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/31192211/" target="_blank"> Principi N, Camilloni B, Alunno A, Polinori I, Argentiero A, and Esposito S. Drugs for Influenza Treatment: Is There Significant News? Frontiers in medicine 2019;6:109.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/30724789/" target="_blank">Hayden FG, Shindo N. Influenza virus polymerase inhibitors in clinical development. Current opinion in infectious diseases 2019; 32:176-86.  </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/30675086/" target="_blank">Ng KE. Xofluza (Baloxavir Marboxil) for the Treatment of Acute Uncomplicated Influenza. P & T: a peer-reviewed journal for formulary management 2019; 44:9-11.  </a>`,
      ],
      level: "Hard",
      category: "Infection",
    }),

    //Q110
    Question_Answer.create({
      question: `35-year-old pregnant female was brought to the clinic with her friend complaining of high fever, vomiting and malaise. The patient had a cough for 3 days. The patient is working at a kindergarten. The patient had a normal pregnancy till date. Patients used to drink a can of beer a day for 10 years but stopped after conceiving. Temperature 101.2 F, blood pressure 125/82, and pulse 105/min. Pulse oximetry is 97% at room air. Cardiac examination was normal except for tachycardia. Chest X-ray shows mild interstitial filtrates. Laboratory results were normal. Patient was diagnosed with Influenza after a positive rapid flu test.
      Which of the following is drug of choice in this patient?`,
      questionImage: [],
      answerOptions: [`Favipiravir`, `Zanamivir`, `Peramivir`, `Oseltamivir`],
      correctAnswer: `Oseltamivir`,
      explanation: `Pregnant and postpartum women with influenza are more likely to develop severe illness than the general population. It is thought to be due to physiological changes such as increase in heart rate and oxygen consumption, decrease in lung capacity and changes in cell mediated immunity. Some studies have shown that influenza virus can cross the placenta via inducing apoptosis in chorion cells [1]. There is a minor role of Trans placental transmission of autoantibodies, though adverse effects are noticed even in absence of this transmission [2]. Due to this severity, inactivated influenza vaccine is given regardless of the trimester of pregnancy [3]. In addition to this empiric treatment is started. Due to low risk of resistance and better systemic absorption, oseltamivir is the drug of choice in pregnancy [4]. Oseltamivir is a neuraminidase inhibitor that prevents the release of viral particles from the infected cell. Besides pregnant women, it can also be given to high-risk patients such as children below the age of 12, to elders above the age of 65 patients with complications, up to 2 weeks of postpartum within 48 hours [5].  Though side effects such as nausea, vomiting and unusual behavior, and confusion can be seen [5]. Another drug that can be used for treatment in pregnancy is zanamivir [ 4].  Zanamivir binds to neuraminidase protein and decrease the ability of virus to leave host cell and infect other cells. Due to the respiratory complications that are associated with zanamivir, it is contraindicated in asthma and COPD patients [6]. The drug which is an absolute contraindication in females of childbearing age is favipiravir. It inhibits viral replication through selective inhibition of viral RNA polymerase as it is detected in breast milk. Therefore, females should avoid pregnancy for 7 days following the drug use to eliminate the drug from plasma [7]. Peramivir is also a neuraminidase inhibitor that prevents release of viral particle from infected cell. Data regarding Permamvir use in pregnancy is still and testing.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/24899469/" target="_blank">Raj RS, Bonney EA, Phillippe M. Influenza, immune system, and pregnancy. Reproductive sciences 2014; 21:1434-51.  </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/11028582/" target="_blank">Irving WL, James DK, Stephenson T, et al. Influenza virus infection in the second and third trimesters of pregnancy: a clinical and seroepidemiological study. BJOG: an international journal of obstetrics and gynaecology 2000; 107:1282-9.  </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/30141464/" target="_blank">Grohskopf LA, Sokolow LZ, Broder KR, Walter EB, Fry AM, Jernigan DB. Prevention and Control of Seasonal Influenza with Vaccines: Recommendations of the Advisory Committee on Immunization Practices-United States, 2018-19 Influenza Season. MMWR Recommendations and reports: Morbidity and mortality weekly report Recommendations and reports 2018; 67:1-20.  </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/21248682/" target="_blank">Fiore AE, Fry A, Shay D, et al. Antiviral agents for the treatment and chemoprophylaxis of influenza --- recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recommendations and reports: Morbidity and mortality weekly report Recommendations and reports 2011; 60:1-24.  </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/20215131/" target="_blank">Dutkowski R. Oseltamivir in seasonal influenza: cumulative experience in low- and high-risk patients. The Journal of antimicrobial chemotherapy 2010; 65 Suppl 2:ii11-ii24.  </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/21333967/" target="_blank">Rasmussen SA, Kissin DM, Yeung LF, et al. Preparing for influenza after 2009 H1N1: special considerations for pregnant women and newborns. American journal of obstetrics and gynecology 2011; 204:S13-20. </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/31192211/" target="_blank">Principi N, Camilloni B, Alunno A, Polinori I, Argentiero A, and Esposito S. Drugs for Influenza Treatment: Is There Significant News? Frontiers in medicine 2019; 6:109. </a>`,
      ],
      level: "Moderate",
      category: "Infection",
    }),

    //Q111
    Question_Answer.create({
      question: `A 56-year-old female presents for evaluation of worsening dyspnea on exertion and associated non-productive cough. She endorses a nonproductive cough on deep inspiration. Her past medical history is significant for diabetes mellitus and obstructive sleep apnea. Additionally, she endorses a 30-pack year history of tobacco usage. On physical exam, S1 and S2 are heard with no murmurs, rubs or gallops. She exhibits no signs of respiratory distress. Her lungs are clear to auscultation bilaterally. Her BMI is 47.37. Her pulmonary function testing results are shown below. A CT scan is obtained.What percentage of patients with the radiographically evident emphysema, as shown above, have normal spirometry findings? `,
      questionImage: [
        "https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q111/Q111+img1.png",
        "https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q111/Q111+img2.png",
      ],
      answerOptions: [`5%`, `10%`, `20%`, `25%`],
      correctAnswer: `10%`,
      explanation: `This patient’s CT scan shows evidence of emphysema, a condition that falls under the umbrella of chronic obstructive pulmonary disease (COPD). In emphysema, damage to the airways ultimately causes irreversible limitations to airflow. A formal diagnosis of COPD is typically reached on the basis of clinical symptoms such as dyspnea and chronic productive or non-productive cough, as well as objective measures in the form of pulmonary function testing. The GOLD (Global Initiative for Chronic Obstructive Lung Disease) criteria is used to classify severity of COPD on the basis of the FEV1/FVC ratio. An FEV1/FVC ratio of <LLN indicates the presence of airflow limitation [1].

      In some cases, a diagnosis of COPD cannot be reached solely on the basis of spirometry. As such, further investigation is warranted. Radiographic evidence of COPD can be seen using computed tomography as an objective means of assessing the lung parenchyma. Some individuals with COPD symptoms and evidence of emphysematous changes on chest CT, as seen in this patient, can have normal spirometry results on pulmonary function testing. Spirometry has been shown to be normal in approximately 10% of patients with clinically evident COPD on chest CT [2]. These patients are generally considered to have a milder form of the disease.

      Obesity is another factor that may complicate the use of spirometry alone to elucidate causes of airflow limitation such as in COPD. A recent study shows that in those with radiographically evident COPD, obese patients, such as the one described above with a BMI of 47, had a more normal FEV1/FVC ratio on average when compared to non-obese patients. Regarding outcomes, studies have shown an “obesity paradox” in which patients with higher BMI had lower mortality in COPD [3]. Additionally, low BMI was shown to have a higher correlation with emphysema diagnosed on the basis of spirometry [4][5][6]. A clinician should be cognizant of this relationship between BMI and COPD outcomes when managing suspected COPD. These patients may warrant further investigation in the presence of seemingly normal pulmonary function testing results.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://goldcopd.org/" target="_blank">ACOS Guidelines 2017, https://goldcopd.org/ </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/25539080/" target="_blank">Lutchmedial SM, Creed WG, Moore AJ, et al. How common is airflow limitation in patients with emphysema on CT scan of the chest? Chest. 2015. Doi: 10.1378/chest.14-1556 </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/24791257/" target="_blank">Galesanu RG, Bernard S, Marquis K, et al. Obesity and chronic obstructive pulmonary disease: Is fatter really better? Can Respir J 2014; 21 (5): 297-301.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/21310838/" target="_blank">O’Donnell DE, Deesomchok A, Lam YM, et al. Effects of BMI on static lung vol- umes in patients with airway obstruction. Chest. 2011; 140(2):461-468</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/18852156/" target="_blank">Ogawa E, Nakano Y, Ohara T, et al. Body mass index in male patients with COPD: correlation with low attenuation areas on CT. Thorax. 2009; 64(1):20-25. </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/17573447/" target="_blank">Makita H, Nasuhara Y, Nagai K, et al; Hokkaido COPD Cohort Study Group. Characterisation of phenotypes based on severity of emphysema in chronic obstructive pulmonary disease. Thorax. 2007; 62(11):932-937. </a>`,
      ],
      level: "Hard",
      category: "Pulmonary Function Testing",
    }),

    //Q112
    Question_Answer.create({
      question: `A 60-year-old woman comes to the clinic with complaints of shortness of breath. For the past few months, the patient had difficulty combing her hair. She also felt more fatigued than usual. The patient takes losartan for hypertension and sertraline for depression. Last month, she started taking a statin for hypercholesterolemia. She drinks a glass of wine daily. On physical examination, there is scaling and hyperkeratosis on the palmar surfaces of the patient’s hands and fingers. Chest X-rays show mild interstitial infiltrates. Patient lab results show increased ESR and CK. Which of the following should be suspected in this patient?`,
      questionImage: [],
      answerOptions: [
        `Polymyalgia rheumatica`,
        `Antisynthetase syndrome`,
        `Statin induced myopathy`,
        `Hypothyroid myopathy`,
      ],
      correctAnswer: `Antisynthetase syndrome`,
      explanation: `Antisynthetase syndrome: The scaling and hyperkeratosis on the hands described in the patient case above, also known as mechanic’s hands, are pathognomonic for antisynthetase syndrome. Anti-synthetase syndrome is an autoimmune condition characterized by the presence of autoantibodies against tRNA synthetases. Other major antibodies possibly seen in this syndrome include Jo 1 Antisynthetase antibodies and anti-Jo 1 antisynthetase antibodies [1]. Usually, patients with Jo 1 Antisynthetase antibodies present differently as compared to those with Jo1 antisynthetase antibodies. For example, myositis and patient survival is more commonly seen in patients with Jo-1 antisynthetase antibodies. This difference in survival is seen due to delayed diagnosis in the patients with anti-Jo-1antisynthetase antibodies. These antibodies don’t disappear even after treatment with immunosuppressive drugs therefore these diagnostic tests are useful even after the patient is being treated [2]. In addition to the mechanic's hands, these patients can also present with unexplained fever, myositis, ILD, Raynaud phenomenon non non-erosive arthritis [1, 3]. Additionally, these patients commonly have elevated CK and ESR, as seen above; however, these biomarkers are non-specific [1]. Patients with this syndrome have higher incidence of involvement of lungs causing interstitial lung disease as compared to myositis such as dermatomyositis and polymyositis. These patients may have ground glass opacity and reticular infiltration on HRCT. ILD seen in these patients is more severe and progresses rapidly. It also carries an increased risk of developing pulmonary hypertension, causing increased morbidity and mortality in this population. Also, there is an increased risk of malignancy in patients with dermatomyositis.
      For treating these patients, corticosteroids were used but after a certain period of time it was noticed that patients having monotherapy with steroids have recurrence of lung disease with tapering of immunosuppressive medications [1,3]. Statin induced myopathy: Statin induced myopathy can cause proximal muscle. But these patients take Statin for a few years unlike this patient. These patients have normal ESR and increase in CK. However, CK levels can be elevated even in the absence of myopathy, therefore it is not a specific marker for statin induced myopathy [4]. It has been reported that LDH is also a sensitive marker of statin related membrane damage, but its clinical utility is still not validated [5]. Polymyalgia rheumatica is seen in patients above 50.Patients have mild muscle tenderness with decreased range of motion at shoulder, neck, and hip. These patients have more muscle stiffness than muscle pain. Patients with PMR have an increase in ESR but normal CK. These patients respond rapidly to glucocorticoid [6]. Polymyalgia rheumatica is most commonly seen in association with giant cell arteritis. Hypothyroid patients can have proximal muscle pain. These patients have normal ESR and increase in CK. This increased creatinine can be due to myofiber degeneration and decrease clearance of creatinine. Relaxation in hypothyroid myopathy can be due to shift of muscle fiber type from fast twitch to slow twitch fiber [7]. For treating these patients, levothyroxine is used which results in complete resolution of myopathy in a few months [7].`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/27594777/" target="_blank">Witt LJ, Curran JJ, Strek ME. The Diagnosis and Treatment of Antisynthetase Syndrome. Clinical pulmonary medicine 2016;23:218-26.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/23422076/" target="_blank">Aggarwal R, Cassidy E, FertigN, et al. Patients with non-Jo-1 anti-tRNA-synthetase autoantibodies have worse survival than Jo-1 positive patients. Ann Rheum Dis;73:227-32.3.Katzap E, Barilla-LaBarca ML, Marder G. Antisynthetase syndrome. Current rheumatology reports 2011;13:175-81.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/22001973/" target="_blank">Tomaszewski M, Stepien KM, Tomaszewska J, Czuczwar SJ. Statin-induced myopathies. Pharmacological reports : PR 2011;63:859-66.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/27634340/" target="_blank">Muntean DM, Thompson PD, Catapano AL, et al. Statin-associated myopathy and the quest for biomarkers: can we effectively predict statin-associated muscle symptoms? Drug discovery today2017;22:85-96.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/30297332/" target="_blank">Partington RJ, Muller S, Helliwell T, Mallen CD, Abdul Sultan A. Incidence, prevalence and treatment burden of polymyalgia rheumatica in the UK over two decades: a population-based study.Annals of rheumatic diseases 2018;77:1750-6.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/31352397/" target="_blank">Jervis W, Shah N, Mongolu SK, Sathyapalan T. Severe proximal myopathy secondary to Hashimoto's thyroiditis. BMJ case reports 2019;12</a>`,
      ],
      level: "Hard",
      category: "Interstitial Lung Diseases",
    }),

    // //Q113
    Question_Answer.create({
      question: `A 65-year Indian woman is intubated because of severe respiratory distress due to obstructive lung disease. She is sedated and the ventilator is set to assist/control mode at rate20/min, tidal volume 600 mL, PEEP 5 cm, and FIO2 0.4. The inspiratory-to-expiratory (I:E) ratio is 1:2. Over the course of 15 minutes, progressive tachycardia and hypotension develop. Heart rate is 120 beats/min, blood pressure is 90/50 mm Hg. A chest radiograph shows hyperinflation, clear lung fields, and no pneumothorax. Arterial blood gas shows PaO2 90 mm Hg, PaCO2 50 mmHg, and pH 7.38. Which one of the following is the most appropriate intervention?`,
      questionImage: [],
      answerOptions: [
        `Begin dopamine`,
        `Decrease the respiratory rate`,
        `Increase tidal volume`,
        `Decrease PEEP`,
        `Decrease sedation`,
      ],
      correctAnswer: `Decrease the respiratory rate`,
      explanation: `In the presence of airflow obstruction typically seen in chronic obstructive pulmonary disease (COPD) or asthma, a potentially serious complication of mechanical ventilation is “air-trapping,” also termed dynamic hyperinflation, or intrinsic PEEP. This occurs when there is inadequate time for exhalation of a breath before the next inspired breath is delivered, leading to over inflation, increased intrathoracic pressure, and hypotension. The goal of managing ventilation is to allow adequate time for exhalation which can be achieved by increasing expiratory time, decreasing the tidal volume and respiration rate, increasing inspiratory flow rates, and using sedatives. A longer inspiration/expiration (I/E) ratio allows time for optimal exhalation and avoiding air trapping. Increased sedation may be necessary. There is no need to try to increase ventilation by increasing tidal volume. Dopamine might increase the blood pressure transiently, but the patient is already tachycardia and likely has a high cardiac output.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/19675347/" target="_blank">Barry Brenner, Thomas Corbridge, and Antoine Kazzi "Intubation and Mechanical Ventilation of the Asthmatic Patient in Respiratory Failure", Proceedings of the American Thoracic Society,Vol.6, No.4(2009), pp. 371-379.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/2186243/" target="_blank">Hall JB, Wood LDH. Management of the critically ill asthmatic patient. Med Clin North Am1990;74:779-796</a>`,
        `<a href="https://www.thoracic.org/statements/resources/allergy-asthma/asthma.pdf" target="_blank">Kohn MS. Intubation of the asthma patient. Clin Allergy Immunol1999; 13:419–428</a>`,
      ],
      level: "Moderate",
      category: "Critical Care",
    }),

    //Q114
    Question_Answer.create({
      question: `Which of the following statements is true regarding tuberculosis pleural effusion?`,
      questionImage: [],
      answerOptions: [
        `Pleural fluid is mostly showing neutrophilic predominance with elevated adenosine deaminase (ADA) levels.`,
        `Pleural fluid is mostly showing lymphocytic predominance with elevated adenosine deaminase (ADA) levels.`,
        `Pleural fluid is mostly showing neutrophilic predominance with low adenosine deaminase (ADA) levels.`,
        `Pleural fluid is mostly showing lymphocytic predominance with low adenosine deaminase (ADA) levels.`,
      ],
      correctAnswer: `Pleural fluid is mostly showing lymphocytic predominance with elevated adenosine deaminase (ADA) levels.`,
      explanation: `Tuberculous pleurisy is the first or second most common form of extrapulmonary tuberculosis. Rupture of a subpleural caseous focus in the lung into the pleural space is thought to be the initial event in the pathogenesis of primary tuberculous pleurisy. Tuberculous (TB)pleurisy remains a diagnostic challenge. Pleural fluid staining for acid fast bacilli (AFB) and culture of M. tuberculosis has a poor yield and sputum or bronchial sampling via bronchoscopy can diagnose only a minority of cases with additional open lung tuberculosis. Closed needle pleural biopsy has a yield of 60–80% for TB pleurisy. Adenosine deaminase (ADA) is raised in TB pleural effusions and has gained popularity in high incidence areas for TB. For patients with a typical clinical presentation for tuberculous pleurisy, combined pleural fluid adenosine deaminase level and lymphocyte/neutrophil ratio is an accurate first step. If this test is negative despite a high clinical suspicion of tuberculous pleurisy, if antibiotic resistance is of concern or if other possible diagnoses are considered, medical thoracoscopy is the method of choice. If the fluid ADA is above 70 U/L, the diagnosis of tuberculous pleurisy is virtually established and antituberculosis chemotherapy can be initiated. If the pleural fluid ADA is between 40 and 70 U/L, one can make a presumptive diagnosis of tuberculous pleurisy. In this situation, if the patient's clinical picture is not typical for tuberculous pleurisy, further diagnostic procedures such as a needle biopsy or thoracoscopy should be considered. If the patient's pleural fluid ADA level is below 40 U/L, the diagnosis of tuberculosis is unlikely and further diagnostic procedures for tuberculosis would not be necessary.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/14582908/" target="_blank">A.H. Diacon*, B.W. Van de Wal*, C. Wyser*, J.P. Smedema*, J. Bezuidenhout# , C.T. Bolliger*,G. Walzl et al. Diagnostic tools in tuberculous pleurisy: a direct comparative study. Eur Respir J2003; 22: 589–5912. </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/24851127/" target="_blank">Doosoo Jeonet al. Tuberculous Pleurisy: An UpdateTuberc Respir Dis 2014;76:153-159</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/9778201/" target="_blank">Valdes L, Alvarez D, San Jose E,etal.Tuberculous pleurisy: A study of 254 patients.ArchInternMed1998;158:2017–2021.4.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/3974296/" target="_blank">Prakash UB, Reiman HM. Comparison of needle biopsy withcytologic analysis for the evaluation of pleural effusion: analysis of 414 cases.MayoClinProc1985;60:158–164.5. </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/8620715/" target="_blank">Burgess LJ, Maritz FJ, Le Roux I, TaljaardJJ. Combined use of pleural adenosine deaminasewith lymphocyte/neutrophil ratio. Increased specificity for the diagnosis of tuberculous pleuritis. Chest1996;109:414–419.6. </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/10424510/" target="_blank">Riantawan P, Chaowalit P, Wongsangiem M, RojanaraweewongP. Diagnostic value of pleuralfluid adenosine deaminase in tuberculous pleuritis with reference to HIV coinfection and aBayesian analysis.Chest1999;116:97–103</a>`,
      ],
      level: "Moderate",
      category: "Infection",
    }),

    //Q115
    Question_Answer.create({
      question: `A 41-year-old woman came into the clinic with shortness of breath for 1 year but worsened for 2 months. She now has shortness of breath even when doing her daily activities like household chores and walking around the house. Also tells us that dyspnea is worse with lying down and mild worsening of dyspnea with raising her arms. She denies H/O fever, cough, difficulty swallowing or hoarseness of voice. She is Obese with BMI of >58 and has been gaining weight. Her past medical history is significant for Severe scoliosis, OSA (not on CPAP), and multinodular goiter. On examination, she was alert and comfortable. Trace to +1 pitting edema. Facial swelling and vascular engorgement of the cervical veins is seen when lifting arms over the head for about a min.
      Vitals: PR: 75, BP: 135/ 90, O2 sat – 91% on RA supine, improved to 96-97% on RA with deep inspiration on room air.
      Lungs: clear, No crackles.
      Heart: Normal S1 S2, no murmurs
      PFTs: FEV1/FVC: 83, FEV1: 1.38 L 59%, FVC: 1.67 L 60%, TLC: 2.76 L 69%, DLCO 44
      Labs: Normal CBC, TSH.
      ABG: 7.37/60/78
      CT:
      What could be the most likely cause of her symptoms?  `,
      questionImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q115/Q115+img1.png`,
      ],
      answerOptions: [
        `Pemberton’s sign`,
        `Ewart’s sign`,
        `Lerman scratch`,
        `Caput Medusae`,
      ],
      correctAnswer: `Pemberton’s sign`,
      explanation: `This patient has enlarged thyroid which is compressing the trachea as shown in the CT scan. Patients have a positive Pemberton’s sign. In this maneuver, the patient is asked to elevate both arms until they touch sides of the face. If there is presence of facial congestion and cyanosis and respiratory distress after a minute as seen in this patient. This maneuver is performed during thyroid examination. This maneuver is also useful in patients with adenopathy, tumor or fibrosis in mediastinum.

      Ewart’s sign: This sign is positive in patients with large pericardial effusion.  In this patient's large effusion compresses the left lower lobe of the lung that results in dullness to percussion and bronchial breath sounds which can be heard at an inferior angle of the left scapula.

      Lerman scratch: It is a murmur that results from rubbing of the pericardium against the pleura. It occurs due to hyperdynamic circulation and tachycardia. This murmur is a mid-systolic scratching sound which is best heard over the upper part of the sternum or second intercostal space at end of the expiration in patients with hyperthyroidism.

      Caput Medusae: It’s a network of painless, swollen superficial epigastric veins radiating from umbilicus across the abdomen. It is common in patients with liver disease. `,
      explanationImage: [],
      explanationLinks: [],
      level: "Easy",
      category: "Mediastinal Disorders",
    }),

    //Q116
    Question_Answer.create({
      question: `Which of the following is NOT a pulmonary complication of CF?`,
      questionImage: [],
      answerOptions: [
        `Massive hemoptysis and pneumothorax`,
        `Atelectasis and acute respiratory failure`,
        `Allergic bronchopulmonary aspergillosis and hypertrophic pulmonary osteoarthropathy`,
        `Lymphangiomyomatosis and chylothorax`,
      ],
      correctAnswer: `Lymphangiomyomatosis and chylothorax`,
      explanation: `There is no correlation between lymphangiomyomatosis and CF. Lymphangiomyomatosis is a rare disease leading to proliferation of smooth muscles and lymphatic channels. It leads to progressive cystic destruction of the lungs, abnormalities in lymphatics, and tumors in the abdomen. It is associated with tuberous sclerosis complex which is autosomal dominant. Involvement of the lymphatics can cause obstruction associated with chylous pleural effusion [1]. Common complications of CF are hemoptysis and spontaneous pneumothorax which can be scanty or profuse [2]. Mucous airway plugging can lead to atelectasis. Pseudomonas and Staphylococcus bacteria can cause pulmonary infection resulting in acute or chronic respiratory failures. Allergic bronchopulmonary aspergillosis (ABPA) results from hypersensitivity to Aspergillus fumigatus and can affect patients with CF. Hypertrophic pulmonary osteoarthropathy is a triad of clubbing, arthritis, and periostitis and is associated with pulmonary compromise in CF patients.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/10901911/" target="_blank">Teo MS, Tan LK, Lim Tk, Lymphangiomyomatosis: radiological and measured lung function deterioration after contrast-enhanced computed tomography. Australas Radiol. 1999 May;43(2):249-52. </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/24361142/" target="_blank">MY. Ng, Pulmonary complications of cystic fibrosis, Clinical Radiology 69 (2014) e153-e162 </a>`,
      ],
      level: "Easy",
      category: "Bronchiectasis",
    }),

    //Q117
    Question_Answer.create({
      question: `Which of following statements regarding the mechanism of action of recombinant human deoxyribonuclease (rhDNase) in CF is correct?`,
      questionImage: [],
      answerOptions: [
        `rhDNase cleaves the extracellular DNA from the neutrophils in sputum to make it less viscous`,
        `rhDNase’s potent antibacterial action prevents the growth of pseudomonas and staphylococci`,
        `rhDNase has antibacterial, bronchodilator, and mucolytic actions`,
        `rhDNase corrects the defect in the CF gene on chromosome 7`,
      ],
      correctAnswer: `rhDNase cleaves the extracellular DNA from the neutrophils in sputum to make it less viscous`,
      explanation: `Recombinant human DNase (rhDNAse) is an enzyme the breaks down DNA strands in airway secretions and helps reduce the viscosity in the lungs to promote secretion clearance [1]. It is given in an aerosol form as 2.5 mg once or twice daily. RhDNase can prevent the growth of infections with parental antibiotics in the hospital but does not have any antibacterial, bronchodilator mucolytic actions. Patients with CF can use mucolytic to clear thick secretions.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/19707442/" target="_blank">Pressler Tacjana, Review of recombinant human deoxyribonase (rhDNAase) in the management of patient with cystic fibrosis, Biologic: Target &Therapy 2008:2(4) 611-617 </a>`,
      ],
      level: "Moderate",
      category: "Bronchiectasis",
    }),

    //Q118
    Question_Answer.create({
      question: `A 53-year-old male smoker presents to the emergency department with exertional dyspnea that has progressed to dyspnea at rest and a cough for 1 month. Two weeks ago, he started having headaches and noticed swelling of his face. Physical examination reveals prominent neck veins and edema of the upper limbs. A chest radiograph demonstrates a suspicious nodule in the right hilar region. Which of the following types of lung cancer is most commonly associated with the signs and symptoms this patient is experiencing?`,
      questionImage: [],
      answerOptions: [
        `Adenocarcinoma of the lung`,
        `Carcinoid tumor of the lung`,
        `Large cell lung cancer`,
        `Small cell lung cancer (SCLC)`,
        `Squamous cell lung cancer`,
      ],
      correctAnswer: `Small cell lung cancer (SCLC)`,
      explanation: `The patient presents with superior vena cava syndrome (SVCS) with symptoms of headaches, upper limbs and facial swelling. This syndrome is diagnosed by total or complete obstruction of superior vena due to tumors, external compression, or thrombus formation. Other associated signs of SVCS include chest pain, cough, and venous distention of the neck [1][2]. Most cases are due to bronchogenic carcinoma due to SCLC associated with smoking [3] in 90%of cases and located in hilar regions on imaging.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/8462332/" target="_blank">Abner A. Approach to the patient who presents with superior vena cava obstruction. Chest1993;103(4 Suppl):394S–7S. </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/17476012/" target="_blank">Wilson LD, Detterbeck FC, Yahalom J. Clinical practice. Superior vena cava syndrome with malignant causes. N Engl J Med 2007;356:1862–9.</a>`,
        `<a href="https://www.semanticscholar.org/paper/Superior-Vena-Cava-Syndrome-in-Small-Cell-Carcinoma-Neary-Lai/ac50a49940a679f0c0f505673866e0f520b51c00" target="_blank">Neary J, Lai J. Superior vena cava syndrome in small-cell carcinoma of the lung: case report and literature review. U Toronto Med J 2004;81:222–9</a>`,
      ],
      level: "Easy",
      category: "Lung Cancer",
    }),

    //Q119
    Question_Answer.create({
      question: `Paraneoplastic syndromes are clinical disorders associated with malignant diseases but not directly related to the physical effects of primary or metastatic tumors.  Several paraneoplastic syndromes are more closely associated with a particular subtype of bronchogenic carcinoma. Which of the following paraneoplastic syndrome is appropriately matched with its most commonly associated histologic type of lung cancer?`,
      questionImage: [],
      answerOptions: [
        `Ectopic Cushing’s syndrome/bronchial carcinoid tumor`,
        `Hypercalcemia/adenocarcinoma`,
        `Hypertrophic pulmonary osteoarthropathy and digital clubbing/SCLC`,
        `Lambert-Eaton myasthenic syndrome (LEMS)/squamous cell carcinoma`,
        `Syndrome of inappropriate antidiuretic hormone (SIADH)/SCLC`,
      ],
      correctAnswer: `Syndrome of inappropriate antidiuretic hormone (SIADH)/SCLC`,
      explanation: `SIADH is correlated with SCLC where most patients are asymptomatic. Hypercalcemia is associated with squamous cell carcinoma due to bone metastasis [1]. Ectopic Cushing syndrome occurs due to continuously secreted adrenocorticotropic hormone (ACTH) most commonly associated with SCLC. LEMS is a disorder of low levels of acetylcholine (ACh) released from the presynaptic terminal, which occurs as a paraneoplastic syndrome in SCLC. Autoantibodies to P/Q voltage-gated calcium channels expressed by the ectopic lung tumor can trigger neurological dysfunction and can cross-react with channels at the neuromuscular junction [2]. The mechanism of Hypertrophic pulmonary osteoarthropathy is unknown but is associated with non-small cell cancer (NSCLC).`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/12527569/" target="_blank">Beckles MA, Spiro SG, Colice GL, Rudd RM. Initial evaluation of the patient with lung cancer: symptoms, signs, laboratory tests, and paraneoplastic syndromes. Chest 2003;123(1 Suppl):97S–104S</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/27471686/" target="_blank">Briggs S, Gozzard P, The association between Lambert–Eaton myasthenic syndrome and small cell lung carcinoma, Immunotargets Ther. 2013; 2: 31–37</a>`,
      ],
      level: "Moderate",
      category: "Lung Cancer",
    }),

    //Q120
    Question_Answer.create({
      question: `Which of the following exocrine glandular ducts are NOT obstructed in cystic fibrosis (CF)?`,
      questionImage: [],
      answerOptions: [
        `Pancreas`,
        `Lungs`,
        `Sweat Glands`,
        `Glands of the uterine cervix`,
      ],
      correctAnswer: `Sweat Glands`,
      explanation: `Patients with CF can have obstructed ducts of mucus-secreting glands causing granular dilation and destruction because of increased viscosity. Most CF patients are susceptible to infections and chronic bacterial colonization. Serous glands such as sweat glands are least affected in CF patients because there is an abnormal concentration of inorganic ions that produces thin mucus compared to glandular obstruction where there is thicker mucus. Measurement of sweat chloride is done using quantitative pilocarpine iontophoresis for diagnosing CF. The lungs are affected leading to bronchiectasis and atelectasis whereas obstruction of the pancreatic ducts causes pancreatitis and malabsorption. Obstructive jaundice can occur due to plugging of the bile ducts.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/24685676/" target="_blank">Ehre C, Cystic Fibrosis: An Inherited Disease Affecting Mucin-Producing Organs, Int J BiochemCell Biol, 2014 Jul; 52: 136-145</a>`,
      ],
      level: "Easy",
      category: "Bronchiectasis",
    }),

    //Q121
    Question_Answer.create({
      question: `Which of the following treatments for COPD has the largest impact on Health Status?`,
      questionImage: [],
      answerOptions: [
        `Ultra-long-acting beta-2 agonists (24 hours duration`,
        `Pulmonary Rehabilitation including exercise`,
        `Long-Acting Muscarinic Antagonists`,
        `Non-invasive ventilation`,
      ],
      correctAnswer: `Pulmonary Rehabilitation including exercise`,
      explanation: `Chronic obstructive pulmonary disease (COPD) is becoming more prevalent as it is the 3rd most common cause of morbidity and mortality worldwide. According to the Global Initiative for Chronic Obtrusive Lung Disease (GOLD), the most effective therapeutic intervention for improving quality of life, physical performance and reducing dyspnea is pulmonary rehabilitation. It is also the most cost-effective treatment in COPD.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/29526182/" target="_blank">Gloeckl R. Pulmonary Rehabilitation and Exercise Training in Chronic Obstructive Pulmonary Disease. Dtsch Arztebl Int. 2018 Feb; 115(8): 117–123.</a>`,
      ],
      level: "Easy",
      category: "Chronic Obstructive Pulmonary Disease",
    }),

    //Q122
    Question_Answer.create({
      question: `A 55-year-old female presents to the emergency department due to coughing up blood in the morning with shortness of breath. Her symptoms include fever, arthralgias of the wrist and knees and unintentional weight loss over the course of 4 months. On physical exam there was nasal crusting, bloody nasal discharge, with decreased air entry at the bases. There is tenderness to palpation of the wrist and knees.  On labs ESR: 78mm/hr, RF: 255 IU/ml, TSH: 2.67 ulU/mL, Cr: 2.34 mg/dL, BUN: 85 mg/dL, Proteinase 3: 97.7 Units, Myeloperoxidase: 5.0 Units, SCL 70: 0.2, C-ANCA titer 1:80, P-ANCA titer negative. CT scan was done and shown below. Which of the following is the diagnosis?`,
      questionImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q122/Q122+img1.png`,
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q122/Q122+img2.png`,
      ],
      answerOptions: [
        `Giant Cell Arteritis`,
        `Polyarteritis Nodosa`,
        `Granulomatosis with polyangiitis`,
        `Microscopic Polyangiitis`,
        `Churg Strauss Syndrome`,
      ],
      correctAnswer: `Granulomatosis with polyangiitis`,
      explanation: `Granulomatosis with polyangiitis (GPA) is a systemic disorder that is characterized by necrotizing vasculitis of the small arteries and veins. The triad of clinical symptoms include necrotizing granulomas of the upper and lower respiratory system, systemic vasculitis and necrotizing glomerulonephritis. Patients with GPA usually present with nonspecific symptoms of fever, malaise, weight loss, arthralgia and myalgia which this patient has.  The earliest complaint for medical attention is related to respiratory system (cough, hemoptysis or dyspnea). This patient has shortness of breath and hemoptysis due to inflammation of the trachea. She also has nasal crusting and bloody nasal discharge due to inflammation of the nose or sinus. Some individuals can develop a tear in the septum dividing the nostrils that can cause a collapse at the bridge of the nose otherwise known as “saddle nose”.

      Diagnosis of GPA is often delayed until clinical presentations. It is made upon clinical evaluation including labs, patient history and biopsy.  In this patient CT scan shows multiple bilateral lung masses as well as a large cavitary of consolidation involving most of the left lobe. There is also bilateral hilar adenopathy larger on the left side. In labs there is evidence of kidney failure due to labs (high BUN and CR). ESR is elevated due to inflammation. A positive test for rheumatoid factor occurs in half of patients who have GPA and is useful to correlate disease status and therapeutic effect.

      Typical histopathology or positive cytoplasmic ANCA (c-ANCA) is the test for diagnosis for GPA. ANCA is both sensitive and specific for GPA. About 80-95% of cases are associated with c-ANCA with antibodies directed against proteinase 3 antibodies (PR3), the remainder are p-ANCA against myeloperoxidase antibodies (MPO) which this patient exhibits. He has positive C-ANCA titers (1:40) with positive PR3.

      The average life expectancy for patients with GPA without treatment is only 5 months. Rituximab has shown to be successful in conjunction with glucocorticoids.  Steroids help suppress the immune system and reduce the inflammation of the blood vessels. Once the disease is stabilized, patients stay on long term immunosuppressants to prevent relapse (methotrexate, azathioprine and mycophenolate) Plasmapheresis can help those with severe GPA and can help the kidney recover [1].

      Giant Cell Arteritis also called temporal arteritis involves inflammation of large arteries including the temporal arteries which is along the side of the head near the temples. Symptoms associated with GCA include headache, scalp tenderness, jaw pain and blurred vision. In severe cases, if left untreated blindness can occur which is irreversible.  This type of vasculitis affects individuals who are >50 years of age.  Women are commonly more affected. There is also an association with polymyalgia rheumatica. In labs ESR will be greater or equal to 50 mm/h. Diagnosis is done with biopsy which shows mononuclear cell infiltration or granulomatous inflammation. Timing is very critical to prevent patients with vision loss therefore steroids should be started immediately [2].

      Polyarteritis Nodosa affects medium blood and is linked to be associated with Hepatitis B or C infections.  Any organ can be affected but for reasons unknown PAN does not affect the lungs. Diagnosis is made by determining the extent of severity of organ system involvement, testing for Hepatitis B, and confirmation of diagnosis by tissue biopsy or angiography [3].

      Microscopic Polyangiitis is a small vessel necrotizing vasculitis. Renal manifestation is the most common and individuals have some form of glomerulonephritis most common form as rapidly progressive glomerulonephritis. Symptoms vary from asymptomatic hematuria to overt renal failure. Patients can also have pulmonary manifestations in the form of alveolar hemorrhage. To distinguish from GPA, labs will be positive for MPO-ANCA which are antibodies against myeloperoxidase detected by ELISA. Treatment is generally with the use of glucocorticoids and cytotoxic agents [4].

      Churg Strauss Syndrome also known as eosinophilic granulomatosis with polyangiitis is characterized by necrotizing vasculitis of small and medium size blood vessels. The diagnostic criteria for Churg Strauss Syndrome according to American College of Rheumatology are (4 out of 6): asthma, migratory infiltrates in lungs, paranasal sinus abnormalities, mono or polyneuropathy, peripheral blood eosinophilia (greater than 10% total leucocyte count) and eosinophilic tissue infiltrates in the biopsy. The prevalence of ANCA positivity in Churg Strauss Syndrome is approximately 40% more specific for myeloperoxidase (MPO). Usually on CT scan there is asymmetric diffuse bilateral peripheral ground glass infiltrates along the bronchial wall thickening. Bilateral bronchocentric nodular infiltrates can also occur but they do not cavitate unlike in GPA. Corticosteroids help in reduction of eosinophils in the blood and tissues. With detection and treatment patients have a favorable prognosis with 5-year survival for 90% of patients [5].
      `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/27195187/" target="_blank">Kabaisi B, Abu Samra K, Foster CS. Granulomatosis with polyangiitis (Wegener’s disease): An updated review of ocular disease manifestations. Intractable Rare Dis Res; 5:61-9 </a>`,
        `<a href="https://www.ncbi.nlm.nih.gov/books/NBK459376/" target="_blank">Gossman W, Peterfy RJ, Khazaeni B. Temporal (Giant Cell) Arteritis. [Updated 2019 Jul 11]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2019 Jan-.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/26884100/" target="_blank">De Virgillo. Polyarteritis nodosa: A contemporary overview. Autoimmun Rev 2016 Jun; 15 (6): 564-70</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/20688249/" target="_blank">Chung S, Seo P. Microscopic Polyangiitis. Rheum Dis Clin North Am. 2010 Aug; 36(3):545-558</a>`,
        `<a href="https://www.ncbi.nlm.nih.gov/books/NBK537099/" target="_blank">Chakraborty RK, Aeddula NR. Churg Strauss Syndrome (Allergic Granulomatosis) [Updated 2019 Nov 21]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2019 Jan-.</a>`,
      ],
      level: "Moderate",
      category: "Interstitial Lung Diseases",
    }),

    //Q123
    Question_Answer.create({
      question: `The most common chest radiographic finding(s) in RA is/are:`,
      questionImage: [],
      answerOptions: [
        `Necrobiotic nodules`,
        `Pleural effusions`,
        `Elevated diaphragms`,
        `Evidence of pulmonary fibrosis`,
        `Focal consolidation`,
      ],
      correctAnswer: `Pleural effusions`,
      explanation: `The most common radiographic finding of RA is pleural effusion. They are usually unilateral, small and asymptomatic, but may cause pleural thickening. Necrobiotic nodules are common well defined round masses ranging up to several centimeters in diameter and typically asymptomatic. They are more often seen in men with advanced joint disease. Pulmonary fibrosis will be found in about 5% of patients.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/31396835/" target="_blank">Goggins MR, Conway R, Durcan LJ, Johnston C, Cunnane G. High prevalence of abnormalities on chest radiography in rheumatoid arthritis. Clin Rheumatol. 2019 Dec;38(12):3375-3380.</a>`,
      ],
      level: "Moderate",
      category: "Other Pulmonary Diseases",
    }),

    //Q124
    Question_Answer.create({
      question: `In which of the following situations is the initiation of therapy in sarcoidosis not indicated:`,
      questionImage: [],
      answerOptions: [
        `Cardiac involvement`,
        `Presence of iritis`,
        `Bilateral lymphadenopathy with clinically significant symptoms`,
        `Asymptomatic bilateral lymphadenopathy`,
      ],
      correctAnswer: `Asymptomatic bilateral lymphadenopathy`,
      explanation: `Treatment is not indicated for patients with asymptomatic pulmonary  sarcoidosis as spontaneous resolution can occur. Glucocorticoids are  the primary treatment for   patients with significant symptomatic or progressive pulmonary  (pulmonary infiltrates with or without bilateral hilar lymphadenopathy) or serious extrapulmonary disease (cardiac, nervous system, severe ocular).  Commonly used glucocorticoid sparing agents  for second line treatment include methotrexate[ most often used ], azathioprine, leflunomide and mycophenolate. Hydroxychloroquine is effective in cutaneous disease and in patients with hypercalcemia. In refractory cases Infliximab and Adalimumab both TNF -alpha  inhibitors are effective options.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/34496176/" target="_blank">Drent M, Crouser ED, Grunewald J. Challenges of Sarcoidosis and Its Management. N Engl J Med. 2021 Sep 9;385(11):1018-1032</a>`,
      ],
      level: "Easy",
      category: "Interstitial Lung Diseases",
    }),

    //Q125
    Question_Answer.create({
      question: `Which simple piece of information is most suggestive of diagnosis of hypersensitivity pneumonitis?`,
      questionImage: [],
      answerOptions: [
        `Surgical biopsy evidence of bronchiolocentric lymphocytic interstitial pneumonia accompanied by granuloma and patchy organizing pneumonia`,
        `Ownership of a cockatoo`,
        `Positive serum precipitation`,
        `Diffuse ground glass opacity on HRCT`,
      ],
      correctAnswer: `Surgical biopsy evidence of bronchiolocentric lymphocytic interstitial pneumonia accompanied by granuloma and patchy organizing pneumonias`,
      explanation: `Making the diagnosis of HP requires combining all of the clinical, radiographic and pathologic information. The importance of history cannot be overestimated. Each of the above findings is consistent with HP, but seen alone, a surgical lung biopsy pattern of a bronchiolocentric disease with lymphocytic cellular infiltrate, granulomas and organizing pneumonia is most suggestive of diagnosis. Ownership of birds is only a risk factor. Precipitations confirm exposure. BAL lymphocytosis is suggestive but not diagnostic. Diffuse ground glass opacity on HRCT is a non-specific finding that requires additional investigation.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/23158795/" target="_blank">Fang F, Xu XM, Zhang W, Pang JX, Liu DG, Wang C. [Clinicopathological diagnosis of hypersensitivity pneumonitis]. Zhonghua Yi Xue Za Zhi. 2012 Sep 25;92(36):2546-9. Chinese.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/22679012/" target="_blank">Selman M, Pardo A, King TE Jr. Hypersensitivity pneumonitis: insights in diagnosis and pathobiology. Am J Respir Crit Care Med. 2012 Aug 15;186(4):314-24.</a>`,
      ],
      level: "Easy",
      category: "Interstitial Lung Diseases",
    }),

    // Q126
    Question_Answer.create({
      question: `A 78 year old male with a history of COPD and former smoker is admitted for PNA and adjacent complex pleural effusion. He has a diagnostic and therapeutic thoracentesis performed which is consistent with parapneumonic effusion. The subsequent day he is noted to have worsening dyspnea and rapid recurrence of effusion seen on bedside ultrasound with a corresponding drop in Hb. A repeat thoracentesis reveals frank blood with 1000cc removed. The patient is now tachypneic to 28 and BP 90/45 and HR 110. What would be the next step?`,
      questionImage: [],
      answerOptions: [
        `Finish draining fluid, remove catheter and observe`,
        `Place 14F chest tube`,
        `Thoracic Surgery consult and plan for thoracotomy`,
        `Place 32 F chest tube`,
      ],
      correctAnswer: `Thoracic Surgery consult and plan for thoracotomy`,
      explanation: `The rapid recurrence of effusion along with a drop raises strong suspicions of a hemothorax secondary to the prior thoracentesis. The repeat thoracentesis is consistent with hemothorax. Typically, it is considered a hemothorax if the ratio of pleural Hct to serum Hct is >50%. Small (<200-300cc) may be managed expectantly. A chest tube should be placed to evacuate the blood which may be adequate for control. In the past large surgical chest tubes (>28F) were placed for hemothorax but more recent studies suggest that percutaneous small-bore catheters 14F are similarly effective in clinical outcome and are less painful.
      The continued rate of drainage, if present, can help determine if surgery is necessary along with clinical status. A rate >200-300cc/hr would suggest surgical therapy. However, this patient has a large amount of blood, 1L, and is clinically deteriorating rapidly for which surgical treatment will be necessary. In unstable thoracic bleeding a thoracotomy may be preferred by the surgeon whereas VATS would be preferred in stable settings.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/33843831/" target="_blank">N. Kulvatunyou et al. The small percutaneous catheter vs open large bore chest tube for traumatic hemothorax. A RCT. J of Trauma and Acute Care Surg. 2021</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/33437141/" target="_blank">J. Zeiler et al. Hemothorax: A review of the Literature. Clin Pulm. 2020</a>`,
      ],
      level: "Hard",
      category: "Pleural Diseases",
    }),

    // Q127
    Question_Answer.create({
      question: `Which of the following is not associated with chronic cannabis smoking?`,
      questionImage: [],
      answerOptions: [
        `A decrease in FEV1/FVC ratio`,
        `Evidence of hyperinflation`,
        `Bilateral lower lobe bullous disease `,
        `FVC and FEV1 have a non-linear association with lifetime cannabis exposure`,
      ],
      correctAnswer: `Bilateral lower lobe bullous disease`,
      explanation: `Chronic cannabis smoking results in airway inflammation. This can lead to symptoms of cough, sputum production, chest tightness and wheezing. Bilateral bullous lobe emphysema does occur in these patients. Lung function studies for chronic cannabis smoking shows:
      decrease FEV1, maximal mid-expiratory flow rate, diffusing capacity
      mild airway obstruction
      abnormally low <70% FEV/FVC due to increased FVC, however the lower FEV/FVC ratio appears mostly because of a reduction on FVC, rather than FEV1.
      FVC and FEV1 have non-linear association with lifetime cannabis exposure`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/35073503/" target="_blank">Hancox RJ, et. al.. Differential Effects of Cannabis and Tobacco on Lung Function in Mid-Adult Life. Am J Respir Crit Care Med. 2022 May 15;205(10):1179-1185. doi: 10.1164/rccm.202109-2058OC. PMID: 35073503.</a>`,
      ],
      level: "Hard",
      category: "Pulmonary Function Testing",
    }),

    // Q128
    Question_Answer.create({
      question: `Sarcoidosis meets all the characteristics of the following except one:`,
      questionImage: [],
      answerOptions: [
        `Spontaneous remission is frequent`,
        `Cardiac sarcoidosis is the most common cause of death`,
        `Bilateral hilar lymphadenopathy`,
        `Most common in middle aged persons`,
      ],
      correctAnswer: `Most common in middle aged persons`,
      explanation: `Sarcoidosis is a rare inflammatory disease described by granulomas that build up in organs and tissues. In most patients the disease resolves  spontaneously. Chronic disease develops in  one third of patients .While lungs are the most common organ of involvement this disease can involve other organs like skin, heart, liver , bone or nervous system. Pulmonary involvement  can lead to bilateral hilar lymphadenopathy  with  parenchymal or interstitial involvement.  Advanced  lung involvement is the most common cause of death. Sarcoidosis can affect  people of all ages but mostly develops in young or middle aged adults [30 to 50 years in men; 50 to 60 years in women.`,
      explanationImage: [],
      explanationLinks: [],
      level: "Easy",
      category: "Interstitial Lung Diseases",
    }),

    // Q129
    Question_Answer.create({
      question: `A 55-year-old man who has two episodes of hemorrhagic shock due to intestinal hemorrhage and post-operative secondary hemorrhage, was admitted to intensive care unit. During the following weeks this was followed by bronchopneumonia with symptoms of sepsis persisting over several weeks. Chest x-ray showed progressive changes in the interstitial tissues and he became more significantly hypoxic. Pulmonary capillary wedge pressure was 7 mm HG. What is the diagnosis?`,
      questionImage: [],
      answerOptions: [
        `Congestive cardiac failure`,
        `Nonischemic Dilated Cardiomyopathy`,
        `Amyloid Heart Disease`,
        `Adult respiratory distress syndrome`,
      ],
      correctAnswer: `Adult respiratory distress syndrome`,
      explanation: `Acute respiratory distress syndrome (ARDS) is an acute inflammatory form of lung injury. Patients present with dyspnea, need for oxygen therapy, and alveolar infiltrates on imaging within 72 hours of provoking event. Common etiologies of ARDS include:(see image)
      This patient is experiencing shock leading into sepsis with CXR of interstitial changes with ARDS as the likely diagnosis. The patient also has normal pulmonary wedge pressure (4 to 12 mm Hg). All the other choices have elevated PCWP (CHF, cardiomyopathy, End stage amyloid heart disease) indicate severe left ventricular failure.`,
      explanationImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q129/A129+img1.png`,
      ],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/28040987/" target="_blank">Yadav H, Thompson BT, Gajic O. Fifty Years of Research in ARDS. Is Acute Respiratory Distress Syndrome a Preventable Disease? Am J Respir Crit Care Med. 2017 Mar 15;195(6):725-736.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/31824644/" target="_blank">Peck TJ, Hibbert KA. Recent advances in the understanding and management of ARDS. F1000Res. 2019 Nov 22;8:F1000 Faculty Rev-1959. doi: 10.12688/f1000research.20411.1.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/29595185/" target="_blank">Pan C, Liu L, Xie JF, Qiu HB. Acute Respiratory Distress Syndrome: Challenge for Diagnosis and Therapy. Chin Med J (Engl). 2018 May 20;131(10):1220-1224.</a>`,
      ],
      level: "Moderate",
      category: "Pulmonary Vascular Disease",
    }),

    //Q130
    Question_Answer.create({
      question: `A 75-year-old man was brought to the emergency department by his son due to behavioral changes over the past two days. The son reports that the patient has had memory loss and tremors in his hands for the past 7 months for which he was also started on some medication. He cannot recall the name of the medication. The use of which of the following medication classes has the highest risk of inducing delirium?`,
      questionImage: [],
      answerOptions: [
        `Dopamine agonists`,
        `Anticonvulsants`,
        `Ant dizziness agents`,
        `Tricyclic antidepressants`,
      ],
      correctAnswer: `Dopamine agonists`,
      explanation: `Elevation in dopamine levels can cause delirium to develop in the elderly. Dopamine is associated with many metabolic pathways and calcium channels that lead to significant increases in dopamine under impaired oxidative conditions. The influx of calcium into cells leads to an increase in dopamine production and uncouples oxidative phosphorylation in brain mitochondria. This leads to an increased production of toxic metabolites of dopamine and a decrease in production of ATP that inhibits the activity of catechol-O-methyltransferase (COMT), which is essential for synthesis and breakdown of dopamine. The increase in the level of dopamine may cause symptoms of the hyperactive type of delirium, including hallucinations and delusions [Ali, 2011]. Side effects of dopamine agonist include constipation, nausea, and headaches. More severe side effects include hallucinations (both visual, tactile, and auditory), somnolence, peripheral edema, valvular heart disease, fibrosis, and heart failure. Patients may also develop excessive daytime sleepiness (EDS) and sleep disordered breathing [Borovac, 2016].`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/27505015/" target="_blank">Borovac J. A. Side effects of a dopamine agonist therapy for Parkinson’s disease: a mini-review of clinical pharmacology. Yale J Biol Med. 2016 Mar; 89(1): 37–47. </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/22132368/" target="_blank">Ali, S. et. al. Insight into Delirium. Innov Clin Neurosci. 2100 Oct; 8(10): 25-34.</a>`,
      ],
      level: "Moderate",
      category: "Critical Care",
    }),

    // Q131
    Question_Answer.create({
      question: `A 70 year old male history of obesity, DM and HTN admitted with COVID-19 PNA. The patient deteriorated on HFNC and progressed to ARDS for which he was intubated. His P/F ratio was 105 and the patient was prone and paralyzed. Which of the following vent setting  parameters would be associated with the best outcome?`,
      questionImage: [],
      answerOptions: [
        `Peak pressure 40, Plateau 38 and PEEP 8`,
        `Peak pressure 34, Plateau 26 and PEEP 8`,
        `Perform a recruitment maneuver`,
        `Peak pressure 34, Plateau 26 and PEEP 12`,
      ],
      correctAnswer: `Peak pressure 34, Plateau 26 and PEEP 12`,
      explanation: `In Acute respiratory distress syndrome (ARDS) it has been established that low tidal volume based on ideal body weight improves mortality. However beyond tidal volume the Driving Pressure has been found to be a significant variable associated with mortality. Driving pressure (DP) is the ratio of tidal volume to (static) respiratory system compliance ; i.e. DP = VT/CRS. [VT =Tidal volumes and  CSR static respiratory system compliance]
      Driving pressure (DP) can also be calculated at the bedside as plateau pressure minus positive end-expiratory pressure (Pplat – PEEP). This represents the Vt normalized to the individual functional lung available and is a way to assess the amount of cyclic lung strain. The Goal is to keep DP  less than <14. This is based primarily on retrospective analyses of multiple RCTs of ARDS patients and shows an association between lower Driving Pressure and  lower mortality.  PEEP has variable effects on oxygenation and outcomes due to the degree of recruitment available and overdistension already present in an individual.
      While Recruitment maneuvers have been used for decades with benefit in lung recruitment and oxygenation there is some evidence that risks may not be worth the potential benefit. The significant increase in intrathoracic pressure may not be well tolerated in certain ARDS patients –most likely those whose RV function is tenuous.  The risk of Pneumothorax remains a concern as well. One of the few RCT addressing the issue showed a higher mortality and higher pneumothorax rate and hypotension rate. For now these maneuvers should be done cautiously until further evidence is available.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/26387728/" target="_blank">Borges JB, Hedenstierna G, Larsson A, Suarez-Sipmann F. Altering the mechanical scenario to decrease the driving pressure. Crit Care. 2015 Sep 21;19(1):342.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/25693019/" target="_blank">Loring SH, Malhotra A. Driving pressure and respiratory mechanics in ARDS. N Engl J Med. 2015 Feb 19;372(8):776-</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/27545828/" target="_blank">Chiumello D, Carlesso E, Brioni M, Cressoni M. Airway driving pressure and lung stress in ARDS patients. Crit Care. 2016 Aug 22;20:276</a>`,
      ],
      level: "Moderate",
      category: "Critical Care",
    }),

    //Q132
    Question_Answer.create({
      question: `Which statement is true about blunt diaphragmatic injury;`,
      questionImage: [],
      answerOptions: [
        `Right sided rupture is more common`,
        `The colon and stomach is the most common herniated viscus`,
        `Pulmonary artery rupture is frequently associating`,
        `Rib fractures are often seen`,
      ],
      correctAnswer: `The colon and stomach is the most common herniated viscus`,
      explanation: `Left sided injuries are more common because the majority of assailants are right-handed and due to protective shielding by the liver. The most common side of rupture is between the lumbar and intercostal muscle slips. The most common herniated viscus are the stomach and the colon. Pulmonary arteries hardly occur. Rib fracture may occur in severe trauma.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/24412818/" target="_blank">Panda A, Kumar A, Gamanagatti S, Patil A, Kumar S, Gupta A. Traumatic diaphragmatic injury: a review of CT signs and the difference between blunt and penetrating injury. Diagn Interv Radiol. 2014 Mar-Apr;20(2):121-8</a>`,
      ],
      level: "Moderate",
      category: "Other Pulmonary Diseases",
    }),

    //Q133
    Question_Answer.create({
      question: `A 69-year-old male who is a smoker (2PPD for 40 years) came to the emergency department in November with complaints of dyspnea and fever for the past 3 days. Patient was recently diagnosed with squamous cell carcinoma of the lung. He has not started any therapeutic interventions for his recent diagnosis. On a physical exam, the patient is coughing, cachectic, ill appearing, has decreased breath sounds in all lung fields, crackles and dullness to percussion in his left lower lobe. A CXR and thoracentesis are obtained based on the clinical and physical findings. Results of thoracentesis are as follows:
      Pleural lactate dehydrogenase: 55 U/L
      Serum lactate dehydrogenase: 89 U/L
      Proteins, serum (total): 7.2 g/dL
      Proteins, pleural fluid: 3.9 g/dL
      Apart from confirmatory imaging and laboratory results, which one of the following clinical findings is most sensitive and specific in diagnosing pleural effusion in this patient?
      `,
      questionImage: [],
      answerOptions: [
        `Diminished breath sounds`,
        `Reduced vocal fremitus`,
        `Dullness to percussion`,
        `Crackles`,
      ],
      correctAnswer: `Dullness to percussion`,
      explanation: `In a high-risk patient, such as the patient mentioned above, pleural effusion is likely given his history. Although dullness to percussion and tactile fremitus are both useful findings, dullness to percussion increases the probability of pleural effusion. A study performed by Wong et al. [1] physical exam maneuvers were studied to assess the probability of pleural effusion. It was noted that dullness to percussion was most accurate for the diagnosis of pleural effusion with a positive likelihood ratio of 8.7 and 95% confidence interval, 2.2-33.8 [1]. The study also concluded that the absence of reduced tactile vocal fremitus made pleural effusion less likely with negative likelihood ratio of 0.21 and 95% confidence interval, 0.12-0.37, making choice B incorrect answer [1]/ A chest radiograph can be used to confirm diagnosis and thoracentesis can be performed for cytology as well therapeutically once diagnosis is confirmed. Choices A and D are non-specific findings as they can be present with many other conditions such as pneumothorax, CHF, fluid overload amongst many others.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/19155458/" target="_blank">Wong CL, Holroyd-Leduc J, Straus SE. Does this patient have a pleural effusion? Jama 2009;301:309-17.</a>`,
      ],
      level: "Moderate",
      category: "Pleural Diseases",
    }),

    //Q134
    Question_Answer.create({
      question: `A 68-year-old female came into the ER after slipping and falling on black ice. She has a past medical history of vitamin D deficiency, H. Pylori, GERD, hypertension and dyslipidemia. The patient routinely takes Omeprazole, Vitamin D, Hydrochlorothiazide and Simvastatin. X-ray showed a right hip fracture. Long term use of which of the following medications can predispose this patient to osteoporosis and fractures?`,
      questionImage: [],
      answerOptions: [
        `Vitamin D`,
        `Omeprazole`,
        `Hydrochlorothiazide`,
        `Simvastatin`,
      ],
      correctAnswer: `Omeprazole`,
      explanation: `According to a study conducted by Targownick et al. detected an association between long term use of proton pump inhibitors and osteoporosis related fractures. It was found that more than 5-year exposure to PPIs lead to hip fractures. Additionally, the study concluded that there was no such association between PPI use and risk of fractures with short term use. Choice D, Simvastatin is incorrect [1]. According to review article by Golomb et al. most common side effects of statins include rhabdomyolysis, cognitive loss, neuropathy, pancreatic and hepatic dysfunction, and sexual dysfunction [2] Osteoporosis is not an adverse effect of Simvastatin. Choice A is incorrect because it is used for bone loss prevention [3].`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/18695179/" target="_blank">Targownik LE, Lix LM, Metge CJ, Prior HJ, Leung S, Leslie WD. Use of proton pump inhibitors and risk of osteoporosis-related fractures. CMAJ : Canadian Medical Association journal = journal de l'Association medicale canadienne 2008;179:319-26.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/19159124/" target="_blank">Golomb BA, Evans MA. Statin adverse effects : a review of the literature and evidence for a mitochondrial mechanism. American journal of cardiovascular drugs : drugs, devices, and other interventions 2008;8:373-418.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/10796394/" target="_blank">Homik J, Suarez-Almazor ME, Shea B, Cranney A, Wells G, Tugwell P. Calcium and vitamin D for corticosteroid-induced osteoporosis. The Cochrane database of systematic reviews 2000:CD000952.</a>`,
      ],
      level: "Moderate",
      category: "Pharmacology",
    }),

    //Q135
    Question_Answer.create({
      question: `Which of the following therapies do not improve survival in patients with COPD?`,
      questionImage: [],
      answerOptions: [
        `Lung volume reduction surgery in patients with upper lobe emphysema and poor exercise capacity`,
        `Oxygen therapy for patients with hypoxemia`,
        `Smoking cessation`,
        `Aggressive and early pharmacotherapy treatment of COPD`,
      ],
      correctAnswer: `Aggressive and early pharmacotherapy treatment of COPD`,
      explanation: `The most important treatment for COPD is smoking cessation as it helps slow the progression of the disease, no matter how long a person has smoked for. Patients with hypoxemia can use oxygen therapy to improve survival and quality of life in severe or advanced COPD. Lung volume reduction surgery is helpful in reducing symptoms in some patients with advanced emphysema. Patients should get their recommended vaccinations to prevent COPD exacerbations (Pneumococcal vaccine, flu vaccine, Pertussis vaccine). Continuous antibiotics use is not recommended as most respiratory infections are caused by viruses and not bacteria.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.uptodate.com/contents/chronic-obstructive-pulmonary-disease-copd-beyond-the-basics" target="_blank">Han MK. Patient education: chronic obstructive pulmonary disease (COPD) treatments (Beyond the Basics). Available at: http://www.uptodate.com/ contents/chronic-obstructive-pulmonary-disease- copd-treatments-beyond-the-basics. Accessed October 30, 2017. </a>`,
      ],
      level: "Moderate",
      category: "Chronic Obstructive Pulmonary Disease",
    }),

    //Q136
    Question_Answer.create({
      question: `A 67-year-old obese female came to the office with complaints of polydipsia, polyuria, polyphagia. After conducting a random glucose test, the patient is diagnosed with Type II Diabetes Mellitus. Before beginning pharmacotherapy, you recommend weight loss as the initial course of treatment. Which of the following constitutes the five A’s that can be incorporated into a provider-directed smoking cessation therapy?`,
      questionImage: [],
      answerOptions: [
        `Ask, Advise, Amend, Alter, and Arrange`,
        `Ask, Advise, Assess, Assist, and Arrange`,
        `Ask, Advise, Adjust, Alter, and Arrange`,
        `Associate, Advise, Adjust, Alter, and Arrange`,
      ],
      correctAnswer: `Ask, Advise, Assess, Assist, and Arrange`,
      explanation: `Ask, Advise, Assess, Assist and Arrange. According to a study conducted by Alexander Et. al, the Five A’s seemed to motivate patients to change their lifestyle. Results of the study showed that the patients whose physicians assisted or arranged showed improvements in dietary fat intake scores. One A that was linked to actual weight loss was arranged. Patient’s whose physicians Arranged to follow up with them were seen to be more likely to have lost weight over a 3-month period. Table below summarizes the Five A’s.`,
      explanationImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q136/A136+img1.png`,
      ],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/21380950/" target="_blank">Alexander S. C. et al. Do the Five A’s Work When Physicians Counsel About Weight Loss? Fam Med. 2011 Mar; 43(3): 179–184.</a>`,
      ],
      level: "Easy",
      category: "Other Pulmonary Diseases",
    }),

    //Q137
    Question_Answer.create({
      question: `A 50-year-old male working as a car mechanic came into a pulmonary clinic for increasing shortness of breath and dry cough for 2 years but worsened for 5 months. He has a family history of ILD and early onset of gray hair. He denies any fever, chest pain, weight loss. He consulted cardiologists previously for SOB and 2D- ECHO, ECG, Stress test was within normal limits. He was then referred to a pulmonologist at a different city where HRCT was done, he was placed on a medication which he eventually stopped because of frequent watery diarrhea and nausea. He smokes an occasional cigarette once a week while having beer. His past medical history was significant for GERD, hypothyroidism which are now under control
      On physical examination, he was moderate built, alert
      Vitals BP: 130/90, PR: 86, temperature: 97.5 F, Oxygen saturation 88 on room air,
      Lungs: B/L crackles (L>R) all over the lungs.
      Heart: Normal heart sounds
      PFT:  FVC 53, FEV1 54, FEV1/FVC 74.
      HRCT: minor reticular opacity within both lungs
      Family history was positive for the similar condition in his father and maternal uncle. Which of the following mutations in genes can lead to the above patient’s condition?
      `,
      questionImage: [],
      answerOptions: [`MUCIN -5B`, `TERT and TR`, `BMPR-2`, `FOX-G1`, `ADAM33`],
      correctAnswer: `TERT and TR`,
      explanation: `Cause of pulmonary fibrosis is poorly understood. Large number of patients have a family history. Abnormally short telomeres are familial causes of pulmonary fibrosis. Mutations In the genes that code for the telomerase enzyme TERT and TR are the most common cause of familial pulmonary fibrosis. Other genes which may cause pulmonary fibrosis are DKC1, TINF2, RTEL1, PARN, and NAF1. Patients with telomere mediated lung disease show extra pulmonary features like liver diseases and bone marrow failure. Genetic anticipation is also seen in some people depending on the type of mutation.

      MUCIN-5B gene: Polymorphism of MUCIN-5b has been shown to be associated with familial and sporadic IPF.

      BMPR-2 and ALK-1 mutation could lead to pulmonary hypertension.

      FOX-G1 gene mutation is a rare mutation that affects the development of brain development and function. Symptoms include microcephaly, sleep disturbances, slow muscle tone. It is most commonly associated with autism spectrum disorders.

      ADAM33 has been linked to asthma, Airway hyperreactivity (AHR), and higher IgE levels.
      `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/27903687/" target="_blank">Merck SJ, Armanios M. Shall we call them "telomere mediated"? Renaming the idiopathic after the cause is found. Eur Respir J. 2016 Dec;48(6):1556-1558</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/23321605/" target="_blank">Stock CJ, et al. Mucin 5B promoter polymorphism is associated with idiopathic pulmonary fibrosis but not with development of lung fibrosis in systemic sclerosis or sarcoidosis; Thorax. 2013 May;68(5):436-41.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/12110844/" target="_blank">Van Eerdewegh P, et al. Association of the ADAM33 gene with asthma and bronchial hyperresponsiveness. Nature. 2002; 418:426–430. [PubMed: 12110844]</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/21441262/" target="_blank">Kortüm F, Das S, et al .The core FOXG1 syndrome phenotype consists of postnatal microcephaly, severe mental retardation, absent language, dyskinesia, and corpus callosum hypogenesis. J Med Genet. 2011 Jun;48(6):396-406. doi: 10.1136/jmg.2010.087528.</a>`,
      ],
      level: "Hard",
      category: "Interstitial Lung Diseases",
    }),

    //Q138
    Question_Answer.create({
      question: `A 75-year-old lady presents with non-productive cough for 2 months. Repeat sputum samples grow MAI. You discuss with the patient about the treatment and she agrees for treatment with antibiotics. Drug susceptibility testing is recommended for new, previously untreated MAC isolates against which antibiotic?`,
      questionImage: [],
      answerOptions: [`Clarithromycin`, `Rifampicin`, `Ethambutol`, `Amikacin`],
      correctAnswer: `Clarithromycin`,
      explanation: `Nontuberculous mycobacteria (NTM) are increasingly recognized as causative agents of opportunistic infections in humans. For most NTM infections the therapy of choice is drug treatment, but treatment regimens differ by species, in particular between slow (e.g. Mycobacterium avium complex, Mycobacterium kansasii) and rapid growers (e.g. Mycobacterium abscessus, Mycobacterium fortuitum). In general, drug treatment is long, costly, and often associated with drug-related toxicities; outcome of drug treatment is poor and is likely related to the high levels of natural antibiotic resistance in NTM.

      For MAC particularly the ideal regimen consists of a macrolide [Azithromycin or clarithromycin], rifampicin and ethambutol. The optimal duration is undefined but may be for up to 12 months until clinical resolution or 12 months of negative sputum cultures.  Overall in vitro susceptibilities of M avium complex to antimicrobial agents such as isoniazid, rifamycin drugs, including rifabutin or rifampicin, and ethambutol. Are of no utility in guiding therapy because of poor correlation with clinical response. Therefore, it is recommended that susceptibility testing for M.avium complex be limited to macrolides. [1][2]. Interestingly ATS guidelines for management of M. kansasii Recommend that for treatment of previously untreated M. kansasii strains should be tested in vitro only to rifampin [1]`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/17277290/" target="_blank">David E. Griffith, Timothy Aksamit, Barbara A. Brown-Elliott, et al. An Official ATS/IDSA Statement: Diagnosis, Treatment, and Prevention of Nontuberculous Mycobacterial Diseases Am J Respir Crit Care Med Vol 175. pp 367–416, 2007 </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/26225805/" target="_blank">Mc Shane PJ. Glassrothj. Pulmonary Disease Due to Nontuberculous Mycobacteria: Current State and New Insights.  chest 2015;148;1517-1527</a>`,
      ],
      level: "Moderate",
      category: "Bronchiectasis",
    }),

    //Q139
    Question_Answer.create({
      question: `Which one of the following clinical characteristics constitutes a common endotype of late-onset non-eosinophilic severe asthma?`,
      questionImage: [],
      answerOptions: [
        `Food allergy`,
        `Allergic rhinitis`,
        `Eczema`,
        `Gastroesophageal reflux disease`,
      ],
      correctAnswer: `Gastroesophageal reflux disease`,
      explanation: `Patients with late-onset non-eosinophilic severe asthma do not have peripheral blood or sputum eosinophilia or exhale nitric oxide; however, common clinical characteristics associated with non-eosinophilic severe asthma typically include chronic or recurrent lower respiratory-tract infections and gastroesophageal reflux disease. Early onset severe asthma most often affects patients with a history of food allergy (commonly egg or milk), as well as the tendency to develop allergic rhinitis and/or conjunctivitis before finally developing asthma. Late onset of severe eosinophilic asthma usually follows a severe bronchial infection, followed by recurring sinus infections and frequently chronic rhinosinusitis with nasal polyps. Late onset alone tends to result in more severe airway obstruction.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/28378957/" target="_blank">Solidoro P, Patrucco F, Fagoonee S, Pellicano R. Asthma and gastroesophageal reflux disease: a multidisciplinary point of view. Minerva Med. 2017 Aug;108(4):350-356</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/26067887/" target="_blank">Naik RD, Vaezi MF. Extra-esophageal gastroesophageal reflux disease and asthma: understanding this interplay. Expert Rev Gastroenterol Hepatol. 2015 Jul;9(7):969-82.</a>`,
      ],
      level: "Moderate",
      category: "Asthma",
    }),

    //Q140
    Question_Answer.create({
      question: `While treating P. aeruginosa infection which of the following is true regarding anti-pseudomonas treatment `,
      questionImage: [],
      answerOptions: [
        `Initial antibiotic therapy should include two agents from different classes with in vitro activity against P. aeruginosa for all serious infections known or suspected to because by P. aeruginosa.`,
        `Nebulized colistin is a bacteriostatic antipseudomonal agent`,
        `There is strong evidence for dual agent intravenous antipseudomonal therapy (eg aminoglycoside plus carbapenem) being more effective in adult bronchiectasis than single agent therapy (eg carbapenem alone)`,
        `Pseudomonas aeruginosa has similar risk factors, prognosis and therapy than other non-fermentative gram-negative bacilli`,
      ],
      correctAnswer: `Initial antibiotic therapy should include two agents from different classes with in vitro activity against P. aeruginosa for all serious infections known or suspected to because by P. aeruginosa.`,
      explanation: `Empirical antibiotic therapy should include two agents from different classes within vitro activity against P. aeruginosa for all serious infections known or suspected to be caused by P. aeruginosa. The rationale of the so-called ‘double coverage effect’ is to increase the likelihood that antibiotic treatment will be active against P. aeruginosa, especially in the setting of a high-risk of antimicrobial resistance. Once results of susceptibility are available, definitive therapy should be tailored accordingly, using a single in vitro active agent with the highest antimicrobial activity and the lowest propensity to select resistance. Indeed, at the time of the present review, no convincing data exist demonstrating a mortality benefit to combination therapy.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/23580739/" target="_blank">Peña C, Suarez C, Ocampo-Sosa A, Murillas J, et al. Effect of adequate single-drug vs combination antimicrobial therapy on mortality in Pseudomonas aeruginosa bloodstream infections: a post Hoc analysis of a prospective cohort. Clin Infect Dis. 2013 Jul; 57(2):208-16</a>`,
      ],
      level: "Moderate",
      category: "Infection",
    }),

    // Q141
    Question_Answer.create({
      question: `In asthmatics the biomarker Exhaled nitric oxide (FeNO) seem to correlate most with  which of the following`,
      questionImage: [],
      answerOptions: [
        `IL4 and IL 13`,
        `IL -15`,
        `Blood eosinophils`,
        `Total Serum IgE levels`,
      ],
      correctAnswer: `IL4 and IL 13`,
      explanation: `Nitric oxide is a gas present in the airways and detectable as fractional nitric oxide (FeNO) in the exhaled air. High FeNO levels are found in a sub-group of asthmatic patients with T2 inflammation. Inducible nitric oxide synthases (iNOS) are the enzymes responsible for the increase of NO in the airways due to inflammation. [Pignatti P, Visca D, Loukides S et. al. A. A snapshot of exhaled nitric oxide and asthma characteristics: experience from high to low income countries. Pulmonology. 2022 Jan-Feb;28(1):44-58]
      FeNO levels correlate with asthma exacerbations in severe asthmatic patients.
      Most of FeNO in the airways is produced by iNOS stimulated by IL-4/IL-13 signaling during inflammatory processes. T2 inflammation in asthma is characterized by an increase of different cytokines reflecting the activation of specific immunologic pathways; FeNO levels seem to correlate better with IL-4 and IL-13 while eosinophils with IL-5. IL-13 is one of the main drivers of iNOS activation and consequent FeNO production.
      FeNO and blood eosinophils can be used independently to predict airway inflammation; but  they did not correlate with each other in an asthmatic is not that strong in uncontrolled Asthma.[ Gao J, Wu F. Association between fractional exhaled nitric oxide, sputum induction and peripheral blood eosinophil in uncontrolled asthma. Allergy Asthma Clin Immunol. 2018 May 23;14:21.]
      FeNO and total serum IgE are elevated in asthmatic patients, particularly in the atopic ones and they weakly correlate.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/29068321/" target="_blank">Shrestha SK, Drews A, Sharma L et. al. Relationship between total serum immunoglobulin E levels, fractional exhaled breath nitric oxide levels and absolute blood eosinophil counts in atopic and non-atopic asthma: a controlled comparative study. J Breath Res. 2018 Feb 20;12(2):026009.</a>`,
      ],
      level: "Moderate",
      category: "Asthma",
    }),

    //Q142
    Question_Answer.create({
      question: `What is the most common cause of hypersomnolence?`,
      questionImage: [],
      answerOptions: [
        `Idiopathic Hypersomnia`,
        `Narcolepsy`,
        `Insufficient Sleep`,
        `Kleine -Levin Syndrome`,
      ],
      correctAnswer: `Insufficient Sleep`,
      explanation: `There are numerous disorders that result in excessive daytime sleepiness, collectively known as the central disorders of  hypersomnolence. These include narcolepsy types 1 and 2, idiopathic hypersomnia, Kleine– Levin syndrome, and hypersomnia due to or associated with medical disease, neurologic disease, psychiatric disease, medications or substances, and insufficient sleep durations. Insufficient sleep syndrome is defined as sleepiness caused by failure to obtain sleep amounts expected for age . As such, primary treatment involves sleep extension, which may require targeted interventions to address the barriers to obtaining enough sleep, such as work and family responsibilities.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/32554240/" target="_blank">Billiard M. Diagnosing hypersomnolence. Sleep Med Rev. 2020 Aug;52:101343.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/30292731/" target="_blank">K Pavlova M, Latreille V. Sleep Disorders. Am J Med. 2019 Mar;132(3):292-299.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/32901432/" target="_blank">Trotti LM, Arnulf I. Idiopathic Hypersomnia and Other Hypersomnia Syndromes. Neurotherapeutics. 2021 Jan;18(1):20-31</a>`,
      ],
      level: "Easy",
      category: "Sleep",
    }),

    // Q143
    Question_Answer.create({
      question: `A 44-year-old woman with severe asthma treated with high-dose inhaled glucocorticoids and long-acting β-agonists is evaluated for persistent wheezing and dyspnea and 2 exacerbations in the past 3 months. The peripheral blood eosinophil count is 300/uL.
      Which one of the following monoclonal antibodies would be the most appropriate add-on therapy for this patient?`,
      questionImage: [],
      answerOptions: [`Benralizumab`, `Dupilumab`, `Reslizumab`, `Mepolizumab`],
      correctAnswer: `Benralizumab`,
      explanation: `All the approved monoclonal antibodies for eosinophilic asthma have been shown to reduce asthma exacerbations in patients with eosinophilic asthma. However, benralizumab
      a humanized anti-IL-5 receptor α monoclonal antibody that induces direct, rapid, and nearly complete depletion of eosinophils, reduces exacerbations specifically in patients whose disease is poorly controlled on high-dose inhaled glucocorticoids and long-acting β2-agonists. Both the CALIMA (n=1306) and SIROCCO (n=1205) trials have shown a reduction in the oral glucocorticoid use and decrease of exacerbations, while lowering peripheral blood eosinophil counts in patients with elevated (>300/uL) blood eosinophil count.

      Reslizumab has been shown to reduce exacerbations and improve lung function in patients with severe asthma. Reslizumab can help reduce the number of eosinophils in the blood and in the sputum. Mepolizumab has been shown to improve asthma exacerbations in patients with eosinophilic asthma and reduce corticosteroid requirements in patients treated with oral corticosteroids.

      Asthma should be treated based on an underlying asthma mechanism of inflammation. Understanding type 2 and non-type 2 inflammatory pathways is the initial step to determining which treatment plan, including which biologic, may be right for your patient. Once you identify the type of asthma the patient has, looking at both phenotypes and endotypes, you can move forward with a personalized approach. Utilize biomarkers to identifying whether the patient has elevations in eosinophils, nitric oxide, or IgE. Identify any allergies or comorbid conditions the patient may have and determine the most appropriate therapeutic strategy in the right patient at the right time.

      Recent studies of the underlying pathophysiology of asthma have shown a significantly improved understanding of type 2 asthma, and eosinophilic inflammation, which have led to the latest targeted interventions. There are currently 5 FDA-approved targeted therapies that have been shown to reduce the number of exacerbations of asthma, improve lung function, and improve asthma-related symptoms, each with a unique profile and AEs: benralizumab (anti IL-5Ra), dupilumab (anti IL-4/-13), mepolizumab (anti IL-5),
      omalizumab (anti-IgE), reslizumab (anti IL-5).

      Emerging treatments include tezepelumab (TSLP inhibitor) in phase 3; CRTh2 oral inhibitors, CxCR2 antagonist, as well as IL-6, -17, -33, and -25, to highlight a few.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/31017107/" target="_blank">Dávila González I Benralizumab: A New Approach for the Treatment of Severe Eosinophilic Asthma. J Investig Allergol Clin Immunol. 2019 Apr;29(2):84-93 </a>`,
      ],
      level: "Hard",
      category: "Asthma",
    }),

    //Q144
    Question_Answer.create({
      question: `A 59-year-old man comes for a routine evaluation to his pulmonologist.  He was diagnosed with GOLD stage I COPD last year and his only medication is albuterol inhaler which he used two or three times daily.  His vitals are as follows: temperature of 38.3ºC, blood pressure 125/70 mm Hg, pulse 80 beats/min, and respiratory rate 14/min.  He has a 20 pack-year history of smoking but stopped 20 months ago.  Last year he received influenza and pneumococcal vaccination (PPSV20) from you.  He has no other medical history.  He wants your opinion about getting immunization this year.  Which of the following is the most appropriate response to your patient’s request?`,
      questionImage: [],
      answerOptions: [
        `He doesn’t need any further vaccination since he received all recommended vaccines last year`,
        `Only killed influenza vaccination is recommended at this time.`,
        `He should get a second dose of pneumococcal vaccination PPSV23 with a killed influenza vaccine.`,
        `He should get the second dose of pneumococcal vaccination PPSV23`,
        `He should get the killed influenza and herpes zoster vaccine`,
      ],
      correctAnswer: `Only killed influenza vaccination is recommended at this time.`,
      explanation: `The above patient already received PPSV23 last year; he does not require getting another PPSV23. He should get an annual influenza vaccine.

      Influenza vaccine: All persons aged 6 months and older are recommended for annual vaccination. There are two different types of flu vaccines, trivalent and quadrivalent. Trivalent vaccines protect against two influenza A viruses (an H1N1 and an H3N2) and an influenza B virus. Trivalent vaccines are available in Standard-dose trivalent shots (IIV3), approved for use in people six months and older and recombinant trivalent shot that is egg-free, approved for people 18 years or older. The quadrivalent vaccines protect against two influenza A viruses and two influenza B viruses. An intradermal quadrivalent flu shot  is approved for people 18 through 64 years of age.

      Pneumococcal vaccines:  Based on the guidelines, published by Advisory committee for Immunization Practices (ACIP) [1]

       Pneumococcal vaccine–naive adults aged 65 years or older (or adults 65 years whose pneumococcal vaccine history is unknown) should receive 1 dose of 13-valent pneumococcal conjugate vaccine (PCV13) followed by a dose of 23-valent pneumococcal polysaccharide vaccine (PPSV23) 6 to 12 months later (minimum duration between PCV13 and PPSV23, 8 weeks).
       Adults aged 65 years or older who have previously received 1 or more doses of PPSV23 should receive 1 dose of PCV13 1 year or longer after the most recent PPSV23 dose.
       In adults who received PPSV23 before age 65 years, PCV13 should be given after age 65 years (and ≥1 year after the PPSV23 was given). PPSV23 should then be repeated 6 to 12 months later (and ≥5 years since the initial PPSV23 injection).`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/25688784/" target="_blank">Pisano J, Cifu AS. Use of pneumococcal vaccine in adults. Jama 2015;313:719-20.</a>`,
      ],
      level: "Moderate",
      category: "Other Pulmonary Diseases",
    }),

    // Q145
    Question_Answer.create({
      question: `Which of the following characteristics is a hallmark of Th2-low/non-atopic asthma?`,
      questionImage: [],
      answerOptions: [
        `Increased IqE`,
        `Sputum neutrophilia`,
        `Blood eosinophilia`,
        `Elevated airway periostin`,
      ],
      correctAnswer: `Sputum neutrophilia`,
      explanation: `Although asthma has historically been considered a Th2-driven disease, recent research has identified multiple phenotypes of asthma. Classic Th2 asthma is most frequently characterized by elevations in the Th2 cytokines IL-4, IL-5, and IL-13, increased serum IgE, elevated blood and sputum eosinophils, and elevations in epithelial periostin.2,3 Additional signs of Th2 asthma include thickening of the sub basement membrane, increased airway hyper-responsiveness, decreased FeNO, and more robust responses to inhaled corticosteroids. Th2-low asthma occurs less frequently than Th2 asthma and is associated with increased neutrophils and IL-17. The precise causes and pathways that underlie Th2-low asthma are not well known. Both forms of asthma typically have positive responses to skin hypersensitivity tests and similar responses to bronchodilators.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/22297792/" target="_blank">Pekkanen J, Lampi J, Genuneit J, Hartikainen AL, Järvelin MR. Analyzing atopic and non-atopic asthma. Eur J Epidemiol. 2012 Apr;27(4):281-6.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/29676818/" target="_blank">Amat F, Soria A, Tallon P, Bourgoin-Heck M, Lambert N, Deschildre A, Just J. New insights into the phenotypes of atopic dermatitis linked with allergies and asthma in children: An overview. Clin Exp Allergy. 2018 Aug;48(8):919-934. doi: 10.1111/cea.13156. Epub 2018 May 24.</a>`,
      ],
      level: "Moderate",
      category: "Asthma",
    }),

    //Q146
    Question_Answer.create({
      question: `Which of the following findings is present in most patients who have hypersensitivity pneumonitis?`,
      questionImage: [],
      answerOptions: [
        `Increased lymphocytes in Bronchoalveolar lavage (BAL)`,
        `Normal DLCO`,
        `High CD4 to CD8 ratio`,
        `Negative precipitin test`,
        `Poorly formed caseating granulomas`,
      ],
      correctAnswer: `Increased lymphocytes in Bronchoalveolar lavage (BAL)`,
      explanation: `BAL is the most sensitive tool to detect an alveolitis in patients suspected of having hypersensitivity pneumonitis (HP). A marked BAL lymphocytosis (greater than 20 percent and often exceeding 50 percent of the white blood cells recovered) is a nonspecific but helpful finding. The BAL CD4+/CD8+ ratio is usually decreased. The finding of substantial numbers of mast cells (greater than 1 percent of recovered white cells), especially if associated with a marked BAL lymphocytosis, may be specific for HP. The presence of mast cells may also be helpful in monitoring for ongoing exposure to the responsible antigen. Mast cells are usually increased following acute exposure and decline toward normal within one to three months. In the majority of patients with sarcoidosis, the BAL lymphocyte count and percentage are increased, while the neutrophil and eosinophil percentages are normal. In addition, a predominance of T-lymphocytes with an elevated 
      CD4/CD8 ratio is a frequent finding in sarcoidosis.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/22796841/" target="_blank">Lacasse Y et al. Recent Advances in Hypersensitivity Pneumonitis. Chest 2012; 142:208-217.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/15481274/" target="_blank">D’Ippolito R et al. Induced sputum and bronchoalveolar lavage from patients with hypersensitivity pneumonitis. Respir Med. 2004; 98(10):977.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/8325114/" target="_blank">Murayama J et al.  Lung fibrosis in hypersensitivity pneumonitis. Association with CD4+ but not CD8+ cell dominant alveolitis and insidious onset. Chest. 1993; 104(1):38.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/2292296/" target="_blank">Semenzato G et al. Clinical guidelines and indications for bronchoalveolar lavage (BAL): extrinsic allergic alveolitis. Eur Respir J. 1990; 3(8):945.</a>`,
      ],
      level: "Moderate",
      category: "Interstitial Lung Diseases",
    }),

    //Q147
    Question_Answer.create({
      question: `Which of the following is not helpful in assessing risk of cancer in this patient with solitary pulmonary nodules?`,
      questionImage: [],
      answerOptions: [
        `Current smoking status`,
        `Nodule size and location`,
        `Gender`,
        `Age`,
      ],
      correctAnswer: `Gender`,
      explanation: `Various validated models have been created to estimate the likelihood of malignancy of nodules based on factors such as patient age; smoking status; history of cancer; and nodule size, morphology, and location. These models use results from large studies and incorporate data into mathematical formulas that yield clinical probabilities for malignancy. One commonly used model from the Mayo Clinic is based on a history of extrathoracic cancer, spiculated morphology, current or past smoking, location in an upper lung, increased nodule diameter, and increased patient age. A more recently developed model from the Veterans Affairs system for nodules larger than 7 mm in diameter is based on only four factors: smoking history, patient age, nodule diameter, and time since quitting smoking.  it is reasonable to assume that older patients, those with a history of extrathoracic cancer, and those with recent smoking histories are at highest risk of malignant solitary pulmonary nodules, whereas younger patients with no history of smoking are at lowest risk. Gender is not a part of risk assessment. Below is the table for radiological features of pulmonary nodules.

      Radiologic Features Suggestive of Benign or Malignant Solitary Pulmonary Nodules`,
      explanationImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q147/A147+img1.png`,
      ],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/17873163/" target="_blank">Wahidi MM, Govert JA, Goudar RK, et al., for the American College of Chest Physicians. Evidence for the treatment of patients with pulmonary nodules: when is it lung cancer? ACCP evidence-based clinical practice guidelines. 2nd ed. Chest. 2007:132(3 suppl):94S–107S.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/8455399/" target="_blank">Midthun DE, Swensen SJ, Jett JR. Approach to the solitary pulmonary nodule. Mayo Clin Proc. 1993:68(4):378–385.</a>`,
      ],
      level: "Easy",
      category: "Lung Cancer",
    }),

    // Q148
    Question_Answer.create({
      question: `A 60-year-old man presented with a 2-year history of exertional shortness of breath that had worsened over the past 2 months. He was a current smoker with a 40 pack-year history. He had a medical history of asthma since childhood, GERD and adult-onset diabetes. In the past 2 years, during the wintertime, he has had intermittent episodes of worsening dyspnea cough, sputum, and wheezing at night that required visit to urgent care.  He was given a short course of prednisone and inhaled beta agonist and regular follow up with a pulmonologist which he refused. Vitals signs:  RR 18 breaths/min, Sat 97%, BP 144/90, Temp 98.8 C, BMI 25 kg/m2. On physical exam:  he is stable and alert with mild wheezing heard during chest auscultation. Chest X- Ray showed mild diaphragm flattening. PFTs done today show: FEV 1 is 63% of predicted, FVC is 80% predicted, and FEV1/FVC is 0.64. Post bronchodilator values are:  FEV 1 is 74% of predicted, with FVC is 82% predicted and FEV1/FVC is 0.69. Which of the following is the most likely diagnosis?`,
      questionImage: [],
      answerOptions: [
        `Pure Asthma`,
        `Pure COPD`,
        `Asthma-COPD overlap syndrome`,
        `Hypersensitivity pneumonitis`,
      ],
      correctAnswer: `Asthma-COPD overlap syndrome`,
      explanation: `Asthma-COPD Overlap Syndrome (ACOS) is characterized by persistent airflow limitation with several features usually associated with both asthma and chronic obstructive pulmonary disease (COPD). The coexistence of incompletely reversible airflow limitation, a characteristic of COPD, and increased airflow variability (characteristic of asthma) is common among people with respiratory symptoms aged 65 years and over.
      Despite the lack of a well-accepted definition, the Global Initiative for Asthma (GINA)identifies a range of features that support a diagnosis of ACO, including :
      ●Age ≥40 years
      ●Respiratory symptoms (eg, exertional dyspnea) are persistent, but variability in symptoms may be prominent
      ●Airflow limitation not fully reversible, but with historical variability: Postbronchodilator forced expiratory volume in one second/forced vital capacity (FEV1/FVC) <0.7 or lower limit of normal and bronchodilator increase in FEV1 >12 percent and 400 mL
      ●History of doctor-diagnosed asthma at some point
      ●History of atopy or allergies
      ●Exposure to a risk factor (eg, ≥10 pack-years tobacco smoking or equivalent indoor/outdoor air pollution)
      People with asthma and COPD have worse outcomes than asthma or COPD alone and have more frequent exacerbations, rapid decline in lung function and poorer quality of life. ACOS has a higher mortality rate as compared to patients with asthma or COPD alone.
      General nonpharmacologic measures for patients with ACO are based on interventions that are useful in managing asthma and/or COPD.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://ginasthma.org/wp-content/uploads/2019/11/GINA-GOLD-2017-overlap-pocket-guide-wms-2017-ACO.pdf" target="_blank">Global Initiative for Asthma (GINA). Diagnosis and initial treatment of asthma, COPD, and asthma-COPD overlap: A joint project of GINA and GOLD updated April 2017. https://ginasthma.org/wp-content/uploads/2019/11/GINA-GOLD-2017-overlap-pocket-guide-wms-2017-ACO.pdf (Accessed on November 18, 2019).</a>`,
        `<a href="https://www.uptodate.com/contents/asthma-and-copd-overlap-aco" target="_blank">MLK Han,  Diagnosis and initial treatment of asthma, COPD, and asthma-COPD overlap: A joint project of GINA and GOLD updated April 2017.</a>`,
      ],
      level: "Moderate",
      category: "Asthma",
    }),

    //Q149
    Question_Answer.create({
      question: `A 55-year-old male with a history of hypothyroidism, chronic obstructive pulmonary disease (COPD), congestive heart failure (CHF) varicose vein, hypertension, obesity, long history of tobacco and alcohol abuse presents to the emergency room complaining of progressive shortness of breath and cough of 6 days duration. He recently underwent vein stripping in an outpatient clinic. After the procedure he complained of left pain and an ultrasound showed left lower extremity DVT. He was started on Xarelto, Advil and sent home. He started complaining of increasing shortness of breath and came to the ER. He denies any fever, chills, dizziness weakness, numbness/tingling sensation. Vitals signs: BP 169/101, SpO2 94%, Temp 98.2 F, HR 120.  Patient is in moderate distress,
      tachypneic, tachycardic and bilateral lower extremity edema. STAT ABG done: pH 7.39, pCO2 48, HCO3 29. Labs done indicate: PT 16, INR 1.6, aPTT 40. WBC 13, HG 11, HCT 35. EKG showed sinus tachycardia with no ST segment elevation. CT scan showed: multiple bilateral lobar pulmonary emboli(see image).

      Based on the clinical trial design for non-vitamin K antagonist oral anticoagulants (NOACs) in venous thromboembolism (VTE), which of the following drugs do not require initial parenteral anticoagulation before oral administration?`,
      questionImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q149/Q149+img1.png`,
      ],
      answerOptions: [
        `Rivaroxaban and edoxaban`,
        `Rivaroxaban and apixaban`,
        `Dabigatran and edoxaban`,
        `Apixaban and dabigatran`,
      ],
      correctAnswer: `Rivaroxaban and apixaban`,
      explanation: `Based on clinical trial design, rivaroxaban and apixaban may be initiated without parenteral anticoagulation. Randomized trials of rivaroxaban and apixaban reported efficacy of both of these factor Xa inhibitors as the sole initial anticoagulant (monotherapy) without initial parenteral anticoagulation. The monotherapy with these agents is safe and effective when administered to the outpatient population (ie, without heparin pre-treatment). For other novel anticoagulants such as edoxaban or dabigatran, LMW heparin followed by dabigatran or edoxaban required. Randomized trials that support efficacy of this combination only studied efficacy for dabigatran (direct thrombin inhibitor) and edoxaban (factor Xa inhibitor) when patients were treated with these agents following a 5-to-10-day course of heparin (usually LMW heparin; ie, dual therapy). Consequently, we suggest that dabigatran and edoxaban not be routinely used as a monotherapy for initial anticoagulation in outpatients but can be used in this setting provided that an initial course of heparin has been administered, similar to the original study protocols that proved their efficacy.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/29525891/" target="_blank">Bromley A., Pitt, A.  A Review of the Role of Non-Vitamin K Oral Anticoagulants in the Acute and Long-Term Treatment of Venous Thromboembolism. Cardiol Ther. 2018 Jun; 7(1): 1–13.</a>`,
      ],
      level: "Moderate",
      category: "Pulmonary Vascular Disease",
    }),

    //Q150
    Question_Answer.create({
      question: `Which one of the following patients with IPF should be considered for genetic testing?`,
      questionImage: [],
      answerOptions: [
        `A patient with evidence of thrombocytosis`,
        `A male patient with premature balding`,
        `A patient being considered for lung transplantation`,
        `A patient younger than 35 years of age`,
      ],
      correctAnswer: `A patient being considered for lung transplantation`,
      explanation: `At present there is no routine genetic testing in patients with IPF with the possible exception of a patient who is being considered for lung transplantation. The idea of testing is to determine if the patient has a short telomere. In these patients' peripheral blood mononuclear cell (PBMC) telomere length testing can be performed. If the PBMC telomere length is short (<10% for age), our experience suggests that the likelihood of identifying a pathogenic mutation in a known telomerase-related gene is high. Patients with short telomeres syndrome generally have a family history of pulmonary fibrosis or the other clinical indicators of short telomeres include history of cryptogenic cirrhosis, aplastic anemia, and/or premature graying. Patients with short telomeres syndrome have worse outcomes of lung transplantation, including post-transplant acute and chronic kidney disease and bone marrow suppression.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/27786550/" target="_blank">Kropski JA, Young LR, Cogan JD,  et.al.  Genetic Evaluation and Testing of Patients and Families with Idiopathic Pulmonary Fibrosis. Am J Respir Crit Care Med. 2017 Jun 1;195(11):1423-1428. doi: 10.1164/rccm.201609-1820PP. PMID: 27786550; PMCID: PMC5470751.</a>`,
      ],
      level: "Hard",
      category: "Interstitial Lung Diseases",
    }),

    //Q151
    Question_Answer.create({
      question: `Which of the following genetic defect is associated with PVOD?`,
      questionImage: [],
      answerOptions: [
        `Vascular endothelial growth receptor (VEGR)`,
        `Epidermal growth factor receptor gene mutation (EGFR)`,
        `Eukaryotic translation initiation factor 2 alpha kinase 4 (EIF2AK4)`,
        `Neuroblastoma RAS Viral (V-Ras) Oncogene Homolog (NRAS) mutation`,
        `BRAF mutation`,
        `Mitogen-Activated Protein Kinase Kinase (MAP2K1)`,
      ],
      correctAnswer: `Eukaryotic translation initiation factor 2 alpha kinase 4 (EIF2AK4)`,
      explanation: `Pulmonary veno-occlusive disease (PVOD) is a rare cause of pulmonary hypertension characterized by progressive obstruction of pulmonary veins.  PVOD presents similarly to pulmonary arterial hypertension (PAH) but has grim prognosis and serious adverse effects that can occur when pulmonary hypertension-specific advanced therapy is administered.  Clinical presentation tends to be non-specific with dyspnea, fatigue and cough with most patients in New York Heart Association functional Class III or IV.   The diagnosis of PVOD is typically based on high clinical suspicion.

      A definitive diagnosis confirmed by surgical or trans-bronchial biopsy that shows widespread fibrous intimal proliferation in the pulmonary veins.  However, with a biopsy there is an increased risk of bleeding and high mortality, therefore it is usually not recommended.  Treatment guidelines for PVOD have not been established but patients (if smokers) are strongly encouraged to join a smoking cessation program.  Patients with PVOD receive conventional therapy (warfarin, diuretics and oxygen if needed) for pulmonary arterial hypertension (PAH).   Use of PAH therapies should be used cautiously to minimize risk of severe pulmonary edema.  Oral therapy may be considered for PVOD patients in New York Heart Association (NYHA) functional class II and III. In patients in NYHA functional class IV, continuous intravenous epoprostenol is used with caution to improve functional and haemodynamic parameters.  It may be considered as a bridge-therapy for lung transplantation.  Without definitive treatment, the prognosis is poor for patients diagnosed with PVOD.`,
      explanationImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q151/A151+img1.png`,
      ],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/27009171/" target="_blank"> Montani D, Lau EM, Dorfmüller P, et al. Pulmonary veno-occlusive disease. Eur Respir J 2016; 47: 1518–1534.</a>`,
      ],
      level: "Hard",
      category: "Pulmonary Vascular Disease",
    }),

    //   Q152
    Question_Answer.create({
      question: `Approximately what percent of people with allergic asthma have allergic rhinitis (AR)?`,
      questionImage: [],
      answerOptions: [`10%`, `20%`, `50%`, `90%`],
      correctAnswer: `50%`,
      explanation: `Allergic rhinitis (AR) is often associated with allergic asthma (AA): approximately 25% of people with AR also have asthma and approximately 50% of people with asthma have AR.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/31827545/" target="_blank">Ramano MR, James S, Farrington E, Perry R, Elliott L. The impact of perennial allergic rhinitis with/without allergic asthma on sleep, work and activity level. Allergy Asthma Clin Immunol. 2019 Dec 6;15:81.</a>`,
      ],
      level: "Easy",
      category: "Asthma",
    }),

    //   Q153
    Question_Answer.create({
      question: `What is the characteristic phenotype of the most common genetic mutation found inAlpha-1 Antitrypsin deficiency patients with chronic liver disease?`,
      questionImage: [],
      answerOptions: [`PI*Null`, `PI*MM`, `PI*FZ`, `PI*ZZ`, `PI*MZ`],
      correctAnswer: `PI*ZZ`,
      explanation: `Alpha-1 Antitrypsin Deficiency is an autosomal codominant condition that predisposes to COPD and liver diseases. It can affect lungs, liver and rarely skin. AAT normally inhibits elastase and in absence of AAT, elastase becomes overactive and destroys elastic tissue (Emphysema). Deficiency can cause cirrhosis due to accumulating in the endoplasmic reticulum of the liver. Severity of the disease is highly variable depending on the type of allele present and the risk factors to which the patient is exposed like Cigarette smoking, occupational and environmental exposure to dust, smoke, etc. In severe deficiency neonatal hepatitis can be seen. Patients with ATT deficiency have symptoms similar to COPD like dyspnea, cough with or without sputum, wheezing, Bronchodilator response is commonly seen. Distinctive features are age of onset which is <45 years and basilar pattern of emphysema, Emphysema in nonsmoker, Family history. Extrapulmonary features seen are Hepatomegaly with elevated aminotransferases levels, ascitis, cirrhosis, hepatocellular carcinoma can also occur. Rarely necrotizing panniculitis can be seen as a manifestation of AAT deficiency. Diagnosis can be made with Blood tests (decreased AAT levels), Spirometry, Imaging, Biopsy, and genetic testing. Obstructive pattern is seen on Spirometry (Decreased FEV1 and FEV1/FVC; Increased TLC). Basilar predominant emphysematous bullae are commonly seen on HRCT. PAS positive granules and globules in hepatocytes can be seen on biopsy. Genetic testing confirms the diagnosis Management is through prevention, medical treatment, and surgery Medical: Augmentation therapy-the intravenous infusion of purified, pooled human plasma AAT-is recommended for individuals with AATD and emphysema. Gene therapy with an adeno-associated virus vector given by whole limb perfusion or intrapleurally. Surgical: Liver transplantation Prevention by avoiding risk factors like smoking.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/15978931/" target="_blank">Significant Progress in Understanding, Recognizing and treating Alpha-1 Antitrypsin Deficiency; Cleveland Clinic’s Alpha-1 Antitrypsin Center plays key role in guideline update;James K. Stoller, MD, MS</a>`,
      ],
      level: "Easy",
      category: "Chronic Obstructive Pulmonary Disease",
    }),

    //   Q154
    Question_Answer.create({
      question: `Which of the following occurs after radiation to the chest?`,
      questionImage: [],
      answerOptions: [
        `Thymic Cyst`,
        `Bronchogenic cysts`,
        `Esophageal duplication cysts`,
        `Pericardial cysts`,
        `Cysts of the chest wall`,
      ],
      correctAnswer: `Thymic Cyst`,
      explanation: `Thymic cysts may arise in patients who have undergone irradiation for Hodgkin disease or breast cancer. These cysts are thought to occur either secondarily to treatment of Hodgkin disease of the thymus or exclusively as a result of radiation effects on the thymus (,31). They manifest as a stable or progressively enlarging cyst. The CT and MR imaging appearance is the same as that of a benign cyst. Irregular or thick-walled cysts should be regarded with suspicion and may necessitate biopsy.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/7302209/" target="_blank">Baron RL, Sagel SS, Baglan RJ.Thymic cysts following radiation therapy for Hodgkin's Disease.Radiology 1981; 141:593-597</a>`,
      ],
      level: "Easy",
      category: "Mediastinal Disorders",
    }),

    //   Q155
    Question_Answer.create({
      question: `Which of the following statements is true of chronic mediastinitis?`,
      questionImage: [],
      answerOptions: [
        `It can present with superior vena cava obstruction`,
        `It can be treated effectively with intravenous steroids`,
        `It can be caused by esophageal rupture`,
        `It can be treated with immunosuppression`,
        `It can improve with cessation of the drug causing it`,
      ],
      correctAnswer: `It can present with superior vena cava obstruction`,
      explanation: `Chronic fibrosing mediastinitis results from long‐standing inflammation secondary to infection, drugs, sarcoidosis, or autoimmune disease. When advanced, the fibrosis can cause compression of organs, including SVC obstruction. There is no effective treatment for this.`,
      explanationImage: [],
      explanationLinks: [],
      level: "Moderate",
      category: "Mediastinal Disorders",
    }),

    //   Q156
    Question_Answer.create({
      question: `The only treatment advised for immunocompromised patients with non-invasive aspergillomas if the patient had no hemoptysis is:`,
      questionImage: [],
      answerOptions: [
        `Surgical debridement`,
        `Oral steroids`,
        `Itraconazole therapy`,
        `Observation`,
      ],
      correctAnswer: `Observation`,
      explanation: `Pulmonary aspergilloma is an infection caused by fungus and usually grows in lung cavities. If aspergilloma is single, the cavity can be stable for months and the patient may experience no symptoms. Aspergillus nodules can occur in immunocompetent hosts and can have single, or multiple cavitation between them.
      Asymptomatic patients who have stable radiographic findings over many months, require no therapy. Progression to chronic cavitary pulmonary aspergillosis is common however, therefore continued observation is required. Spontaneous resolution can occur in about 10% of patients.
      The mainstay of therapy for chronic pulmonary aspergillosis is the azoles particularly itraconazole and voriconazole. However, it is important to be aware of significant adverse effects and drug interactions associated with azoles so monitoring of serum concentration is necessary. In immunocompromised patients, oral steroids will not have a role and will be the patient at risk for further management.

      Surgical resection is performed to prevent or treat life-threatening hemoptysis with patients with Aspergilloma. Other indications for resection include, recurrent infection, inability to take azole therapy, azole resistance, and concurrent infection or tumor. Surgery should be avoided with patients with complicated disease of chronic cavitary pulmonary aspergillosis.
      In patients with moderate or severe hemoptysis who are too ill for surgery, embolization may be appropriate. The most common cause of hemoptysis is abnormal vascular connections within the pulmonary vessels. Embolization procedures are successful approximately 50-90% of the time. However, rebleeding can occur in 30-50% after three years. Long term antifungal therapy can minimize the relapse of rebleeding.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/26699723/" target="_blank">Denning DW, et al. Chronic pulmonary aspergillosis: rational and clinical guidelines for diagnosis and management. Eur Respir J 2016; 47:45</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/1554270/" target="_blank">Jewkes J, Kay PH, Paneth M, Citron KM. Pulmonary aspergilloma: analysis of cavitating invasive pulmonary aspergillosis in immunocompromised patients. Ann Thorac Surg 1983; 53:621.</a>`,
      ],
      level: "Easy",
      category: "Infection",
    }),

    //   Q157
    Question_Answer.create({
      question: `Which of the following diseases show halo sign in radiology?`,
      questionImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q157/Q157+img1.png`,
      ],
      answerOptions: [
        `Pulmonary zygomycosis`,
        `Chronic Aspergillosis (Colonizing aspergillosis)`,
        `Invasive pulmonary Aspergillosis`,
        `Rhinocerebral zygomycosis`,
      ],
      correctAnswer: `Invasive pulmonary Aspergillosis`,
      explanation: `The halo sign has been described in patients with invasive aspergillosis and acute leukemia. Invasive pulmonary aspergillosis represents one end of the spectrum of conditions caused by Aspergillus organisms. In a severely immunocompromised patient with a fever that does not respond to antibiotics, pulmonary or systemic fungal infection must be considered in the differential diagnosis. Early recognition of this complication is critical because this disease is associated with a high mortality rate that ranges from 50% to 90%.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/11452056/" target="_blank">Franquet T, Muller NL, Gimenez A, Guembe P, de La TJ, Bague S.Spectrum of pulmonary aspergillosis: histologic, clinical, and radiologic findings. RadioGraphics 2001; 21:825-837</a>`,
      ],
      level: "Moderate",
      category: "Other Pulmonary Diseases",
    }),

    //   Q158
    Question_Answer.create({
      question: `Which statement is true of pneumomediastinum?`,
      questionImage: [],
      answerOptions: [
        `The most common collagen vascular disorder associated with this condition is Dermatomyositis`,
        `It always due to thoracic trauma`,
        `It should always be managed with a small chest drain`,
        `It will improve with supplemental oxygen`,
        `It always requires thoracic surgery`,
      ],
      correctAnswer: `The most common collagen vascular disorder associated with this condition is Dermatomyositis`,
      explanation: `A pneumomediastinum can occur from trauma or alveolar over‐distension and usually has a reasonable prognosis, resolves on it’s on. This does, however, depend on the underlying cause. Chest drain, surgery or hyperbaric oxygen are not indicated commonest collagen vascular disorder associated with this condition is Dermatomyositis.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.ncbi.nlm.nih.gov/books/NBK557440/" target="_blank">Iteen AJ, Bianchi W, Sharman T. Pneumomediastinum. 2020 May 19. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2020 Jan–</a>`,
      ],
      level: "Moderate",
      category: "Pleural Diseases",
    }),

    //   Q159
    Question_Answer.create({
      question: `In case of symptomatic anastomotic dehiscence following lung transplantation the best therapeutic option would be:`,
      questionImage: [],
      answerOptions: [
        `Immediate surgical repair`,
        `Emergent re-transplantation`,
        `Discontinuation of Prednisone and administering Sirolimus`,
        `Placement of an uncovered metallic stent`,
      ],
      correctAnswer: `Placement of an uncovered metallic stent`,
      explanation: `Airway complications after lung transplantation are associated with significant mortality and morbidity. Anastomotic dehiscence occurs due to separation of surgical anastomosis because of extreme necrosis. Diagnosis can be confirmed by bronchoscopy and to assess the severity of the defect. Treatment depends on symptoms and severity. Partial dehiscence is often managed conservatively with surveillance and antibiotics. Severe dehiscence is managed with temporary placement of uncovered metallic stent where it forms granulation formation and remodeling of the airways. If these options are not effective, surgery would be the last resort. Common surgical interventions include re-transplantation, re-anastomosis, or flap bronchoplasty.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/28274791/" target="_blank">Mahajan AK. Folche E, Khanhar SJ, et al. Airway Complications Following Lung Transplantation: A Comprehensive Review. Chest 2017;152:627-38 </a>`,
      ],
      level: "Easy",
      category: "Lung Transplant",
    }),

    //   Q160
    Question_Answer.create({
      question: `A 64-year-old man with diabetes and hypertension presented with a 2-day history of sudden onset of acute pain and cyanosis on the sole of his right foot 4 days after undergoing cardiac catheterization and coronary angiography. The physical examination revealed macular, Violaceous, connecting rings in a net-like pattern that blanch with pressure and disappeared when the foot was elevated, a presentation compatible with livedo reticularis. Laboratory testing (complete blood cell count, biochemistry panel, coagulation test, and C-reactive protein test) was notable only for eosinophilia. A few days later, the patient returned with abdominal pain, diarrhea, and acute renal injury with urinary eosinophils (7% of the white blood cells in the urine) and proteinuria. Which is the most likely diagnosis?`,
      questionImage: [],
      answerOptions: [
        `Infective endocarditis`,
        `Pernio (chilblain)`,
        `Cholesterol crystal embolism`,
        `Cutaneous small—vessel vasculitis`,
      ],
      correctAnswer: `Cholesterol crystal embolism`,
      explanation: `This patient has cholesterol crystal embolism. There are various risk factors that are associated with it such as age, smoking, obesity, hypertension, diabetes mellitus type 2, and hypercholesterolemia. Also, any vascular procedure or cardiac catheterization also increases the risk as seen in this patient. Patients with cholesterol crystal embolism can present ulcers, gangrene, kidney injury, stroke, intestinal ischemia, blue toe syndrome (cyanotic toe with intact pulse), and livedo reticularis (net like pattern that blanches with pressure application). Their clinical presentation depends on the location of the embolic source. On further laboratory testing, patients have elevated serum creatinine, eosinophilia, and hypocomplementemia. Eosinophiluria can be seen on urinalysis. The definitive diagnosis can be made by skin and renal biopsy which demonstrates biconvex, needle shaped clefts with vessels and perivascular inflammation with eosinophils. Along with supportive treatment, these patients are started on station therapy to further decrease risk of embolization in these patients.
      Pernio is an inflammatory skin condition that occurs after exposure to cold. Patients present with pruritic, erythematous to violaceous acral lesions. This skin lesion appears within 12 to 24 hours of cold exposure and resolves within one to three weeks.
      Cutaneous small—vessel vasculitis presents with palpable purpura, non-blanching petechiae, which is not the presentation in this patient.
      Infective endocarditis: Patient presents with symptoms such as fever, chills, anorexia, new onset murmur, myalgia, non-tender erythematous macules on palm and soles, tender subcutaneous violaceous nodules on pads of fingers and toes. Echocardiograms can help to identify the vegetations.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/28538699/" target="_blank">Cholesterol Crystal Embolism and Chronic Kidney Disease. Xuezhu Li, George Bayliss and Shougang Zhuang. Int. J. Mol. Sci. 2017, 18, 1120; doi: 10.3390/ijms18061120</a>`,
      ],
      level: "Moderate",
      category: "Critical Care",
    }),

    //   Q161
    Question_Answer.create({
      question: `All of the following are accepted indications for surgical in a patient with pneumothorax except:`,
      questionImage: [],
      answerOptions: [
        `Second ipsilateral pneumothorax`,
        `First contralateral pneumothorax`,
        `Synchronous bilateral spontaneous pneumothorax`,
        `Persistent air leak (despite 5–7 days of chest tube drainage) or failure of lung re-expansion`,
        `A patient who is in her first trimester of Pregnancy`,
      ],
      correctAnswer: `A patient who is in her first trimester of Pregnancy`,
      explanation: `Pneumothorax recurrence is more common in pregnancy, poses risks to the mother and fetus, and requires close cooperation between chest physicians, obstetricians and thoracic surgeons. The modern and less invasive strategies of simple observation and aspiration are usually effective during pregnancy, with elective assisted delivery and regional anesthesia at or near term. A corrective surgical procedure (VATS) should be considered after delivery.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/28679967/" target="_blank">Sano A, Yotsumoto T. Thoracoscopic Surgery for Pneumothorax Following Outpatient Drainage Therapy. Ann Thorac Cardiovasc Surg. 2017 Oct 20;23(5):223-226.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/17873199/" target="_blank">Lal A, Anderson G, Cowen M, Lindow S, Arnold AG. Pneumothorax and pregnancy. Chest. 2007 Sep;132(3):1044-8.</a>`,
      ],
      level: "Moderate",
      category: "Pleural Diseases",
    }),

    //   Q162
    Question_Answer.create({
      question: `An 83-year-old woman was admitted to the hospital for a COPD exacerbation [GOLD Group C]. Her most recent forced expiratory volume in 1 second is 47% of predicted, and her peak inspiratory flow is 26 L/min. She states that she has been adherent to her medication and quit smoking last year. Which of the following devices is most suitable for this patient on discharge?`,
      questionImage: [],
      answerOptions: [
        `Dry powder inhaler`,
        `Soft mist inhaler`,
        `Pressurized metered dose inhaler`,
        `Nebulizer`,
      ],
      correctAnswer: `Nebulizer`,
      explanation: `It is important for clinicians to choose an appropriate and suitable inhaler device for their patients. This requires consideration of a patient's medical history, preferences, and lifestyle.

      Dry powder bronchodilator devices have an internal resistance. Effective use depends on the patient generating an adequate inspiratory flow to break up the powder packets into particles less than 5-μm in diameter that can be inhaled into the lower respiratory tract. This disaggregation takes place inside the device before the dose leaves the inhaler; this process is increased if the acceleration is fast at the start of inhalation.

      A peak inspiratory flow rate [PIFR] of at least 60 L/min through the dry powder device is considered optimal for the patient to break up the powder and inhale the fine particles into the lungs, whereas a PIFR less than 30 L/min is insufficient.

      Peak inspiratory flow depends on an individual’s effort along with the strength of the respiratory muscles, which may be compromised in those with chronic obstructive pulmonary disease as a result of lung hyperinflation, hypoxemia, and muscle wasting. As dry powder inhalers are driven by inspiratory flow and require a certain level of peak inspiratory flow, making this device unsuitable for this patient, who has a low peak inspiratory flow.

      Soft mist inhalers create a slow-moving, fine mist, needing less synchronization between device actuation and inhalation. Soft mist inhalers do require strength and dexterity for inhaler preparation.

      Pressurized metered dose inhalers require multiple steps for proper use and may be overwhelming for a patient to learn in the hospital. Nebulizers are not dependent on peak inspiratory flow and are easy to use, with no hand-breath coordination required.

      These devices do need frequent cleaning and maintenance. A nebulizer may be appropriate for transitional care as in this patient and use of another device may be taught to the patient at a follow-up office visit.
      `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/28481631/" target="_blank">Mahler DA. Peak Inspiratory Flow Rate as a Criterion for Dry Powder Inhaler Use in Chronic Obstructive Pulmonary Disease. Ann Am Thorac Soc 2017 Vol 14, No 7, pp 1103–1107</a>`,
      ],
      level: "Moderate",
      category: "Chronic Obstructive Pulmonary Disease",
    }),

    //   Q163
    Question_Answer.create({
      question: `Compared to CPAP treatment for Obstructive Sleep Apnea, oral appliance therapy results in similar improvements in which one of the following?`,
      questionImage: [],
      answerOptions: [
        `Apnea Hypopnea Index`,
        `Quality of Life`,
        `Hypoxemia`,
        `Periodic limb movements`,
      ],
      correctAnswer: `Quality of Life`,
      explanation: `The overall grade for the body of evidence on the impact of oral appliances (OAs) to treat obstructive sleep apnea (OSA) varies between low and moderate depending on the physiologic sleep outcome measures. A systematic review of the evidence has shown that OAs reduce AHI, arousal index, and oxygen desaturation index, and increase oxygen saturation. However, OAs have shown no significant effect on sleep architecture and sleep efficiency.

      The overall improvement in physiologic sleep parameters with the use of OAs in adult patients with OSA results in an improvement in daily function and quality of life. Although OAs have been shown to improve physiologic sleep parameters, continuous positive airway pressure (CPAP), in the meta-analyses Ramar etal. was found to be superior to OAs in reducing the AHI, arousal index, and oxygen desaturation index and improving oxygen saturation, and therefore, should still generally be the first-line option for treating OSA. The improvement in QOL produced by custom, titratable OAs is not inferior to that reported with CPAP therapy. The custom, titratable OAs improve QOL, but as with CPAP, reduced QOL may persist despite otherwise adequate therapy.
      `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/26094920/" target="_blank">Ramar K, Dort LC,Katz SG ,et.al. Clinical Practice Guideline for the Treatment of Obstructive Sleep Apnea and Snoring with Oral Appliance Therapy: An Update for 2015 An American Academy of Sleep Medicine and American Academy of Dental Sleep Medicine Clinical Practice Guideline. J Clin Sleep Med. 2015 Jul 15; 11(7): 773–827.</a>`,
      ],
      level: "Easy",
      category: "Sleep",
    }),

    //   Q164
    Question_Answer.create({
      question: `A 39-year-old female complains of cough, hemoptysis and shortness of breath. There is profound general weakness; however, there is no fever. On examination there is pallor and chest examination revealed bilateral scattered crepitation, on investigation. Hb= 6.7 gm/dl, TLC= 6,200/cu mm, DLC=N70%, L24%, E2%, M4%. X-ray chest shows bilateral diffuse parenchymal infiltrates. Pulmonary function was done and showed FVC of 92% predicted, FEV1/FVC of 84%, DLCO 120 predicted. The most likely diagnosis is:`,
      questionImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q164/Q164+img1.png`,
      ],
      answerOptions: [
        `Pulmonary tuberculosis`,
        `Diffuse pulmonary alveolar hemorrhage`,
        `Bilateral bronchiectasis`,
        `Lymphangioleiomyomatosis`,
      ],
      correctAnswer: `Diffuse pulmonary alveolar hemorrhage`,
      explanation: `Diffuse pulmonary alveolar hemorrhage (DAH) is a life-threatening condition resulting in bleeding into the alveolar spaces of the lungs. The disorder is caused by injury or inflammation of the arterioles, venules, or alveolar septal. It is usually associated with cough, fever, dyspnea and hemoptysis initially. Some patients can have acute respiratory failure requiring immediate ventilatory support. On chest x-ray, diffuse opacities can be seen. Characteristic CT scan finding include ground glass pattern or bilateral opacities. Lab findings in DAH are nonspecific. Common findings include low or decreasing hemoglobin or hematocrit and elevated white blood cell count. ESR is usually increased especially those with systemic diseases.

      Most patients cannot undergo pulmonary function testing but those who are stable enough will show an increase in DLCO usually above 100 percent of predicted. Monitoring DLCO is useful for those patients with DAH. Occasionally, obstructive airway disease may be seen on PFTs in patients with recurrent DAH.

      Steroids and immunosuppressive agents remain the treatment of choice for DAH patients. Recombinant activated human factor VII is a new promising therapy but needs further evaluation.

      Patients with pulmonary TB usually present with symptoms of weight loss, nausea and vomiting, fever, chills, and night sweats. Risk factors include those individuals living in crowded unclean living conditions, poor nutrition. (choice A)

      Bilateral bronchiectasis leads to abnormal dilation and distortion of the bronchial tree resulting in chronic obstructive lung disease. Most common symptoms are coughing up yellow or green mucus, shortness of breath and hemoptysis. Most common cause of bronchiectasis is cystic fibrosis. ON HRCT, findings include airway dilation, bronchial wall thickening, and air trapping. PFTS can show obstructive impairment. (Choice C)

      Lymphangioleiomyomatosis (LAM) is a rare multisystem disease that predominantly affects young women. Symptoms depend on the origin of the disease. Common pulmonary symptoms are fatigue, progressive dyspnea, spontaneous pneumothorax and pleural effusion. (Choice D)
      `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/23678356/" target="_blank">Moo Suk Park, Diffuse Alveloar Hemorrhage. Tuberc Respir Dis (Seoul). 2013 Apr; 74(4): 151–162.</a>`,
      ],
      level: "Hard",
      category: "Critical Care",
    }),

    //   Q165
    Question_Answer.create({
      question: `82-year-old female who presented to the clinic for a follow up visit after a diagnosis of pulmonary embolism. Pt is status post lumbar spine surgery. Following the surgery, she was started on Xarelto and had intermediate probability VQ scan. Repeat VQ scan showed resolution of a mismatched defect. Pt’s PMH is significant for aortic stenosis. She denies a history of smoking. Pt admits to wheezing but denies fever, chills, rigors, chest pain or hemoptysis. Denies history of liver dysfunction or collagen vascular disorder. Patient’s vitals are RR 18, Temp 98.7F, BP 140/90. Physical exam is significant for crescendo, decrescendo murmur on cardiac exam and wheezing on respiratory exam. Based on the pulmonary function test results given below, which of the following is the correct diagnosis?`,
      questionImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q165/Q165+img1.png`,
      ],
      answerOptions: [
        `COPD`,
        `Small airway disorder`,
        `Interstitial lung disease`,
        `Extra thoracic chest wall dysfunction`,
      ],
      correctAnswer: `Small airway disorder`,
      explanation: `Spirometry suggestive of obstructive pattern based on the decrease in FEV1/SVC. The FEV1/FVC ratio is relatively normal however, the patient's FEV1/SVC is decreased compared to the LLN which suggests obstructive lung disease. Additionally, in this case the FEF25-75% improved by 33% on bronchodilator response which is suggestive of small airway disorder. An improvement of greater than 30% in FEF25-75% on bronchodilator is suggestive of small airway disorder. Additionally, the difference between slow inspiratory vital capacity (SVC) and FVC and the FVC to SVC ratio may act as markers of the collapsibility of small airways. There are several ways to assess and monitor small airway disease. Techniques that can be used to assess the small airways are shown in the table below. DLCO is decreased which reflects underlying gas exchange abnormality.`,
      explanationImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q165/A165+img1.png`,
      ],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/17890480/" target="_blank">Cohen J. et al. FVC slow inspiratory vital capacity ratio: a potential marker for small airways obstruction. Chest. 2007; 132(4):1198-203</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/28649293/" target="_blank">Carr T. et al. small airways disease and severe asthma. World allergy Organization Journal (2017) 10:20 </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/26557240/" target="_blank">McNulty W. et al. techniques of assessing small airways dysfunction. European Clinical Respiratory Journal 2014</a>`,
      ],
      level: "Moderate",
      category: "Pulmonary Function Testing",
    }),

    // Q166
    Question_Answer.create({
      question: `Which of the following is a correct about superior vena cava syndrome?`,
      questionImage: [],
      answerOptions: [
        `It generally results in hoarseness of voice`,
        `The superior vena cava (SVC) is formed by the union of right and left brachiocephalic veins and the azygos vein`,
        `SVC obstruction is an absolute contraindication for bronchoscopy`,
        `Hodgkin's lymphoma is the most common cause in children`,
        `The most common cause for SVC obstruction is bronchogenic carcinoma`,
      ],
      correctAnswer: `The most common cause for SVC obstruction is bronchogenic carcinoma`,
      explanation: `Superior vena cava (SVC) is formed by the union of right and left brachiocephalic veins. The azygos vein drains to the SVC just before the SVC drains to the right atrium. Malignancy is the most common cause of SVC syndrome accounting for 65% of the cases. The most common malignant cause is lung cancer [72%] followed by lymphoma [12%] and metastatic disease [10%]. Non-Hodgkin’s lymphoma is the most common intrathoracic tumor in young males. Although infection previously accounted for the majority of benign cases, currently the most common cause is thrombosis secondary to intravascular procedures. SVC obstruction increases the complications associated with bronchoscopy. However, SVC obstruction is not an absolute contraindication for bronchoscopy.  In some cases due to laryngeal oedema SVC obstruction may lead to hoarseness of voice. Due to decreased venous return severe SVC obstruction may lead to cerebral oedema.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/17476012/" target="_blank">Wilson LD, Detterbeck FC, Yahalom J. Clinical practice: superior vena cava syndrome with malignant causes. N Engl J Med 2007; 356:1862–1869.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/27026923/" target="_blank">Straka C, Ying J, Kong FM, Willey CD, Kaminski J, Kim DW. Review of evolving etiologies, implications and treatment strategies for the superior vena cava syndrome. Springerplus 2016;5:229.</a>`,
      ],
      level: "Moderate",
      category: "Other Pulmonary Diseases",
    }),

    //   Q167
    Question_Answer.create({
      question: `Patients with which of the following disease states are not at increased risk of Pseudomonas aeruginosa infection?`,
      questionImage: [],
      answerOptions: [
        `Adult bronchiectasis`,
        `Idiopathic pulmonary fibrosis`,
        `Cystic fibrosis`,
        `Patients on ventilator`,
      ],
      correctAnswer: `Idiopathic pulmonary fibrosis`,
      explanation: `Patients with idiopathic pulmonary fibrosis are at less risk of developing a Pseudomonas infection relative to the other groups listed. In the case of patients with bronchiectasis or cystic fibrosis, there is some component of structural lung damage which predisposes these patients to Pseudomonas infection. Similarly, patients on ventilator are at risk of developing ventilator-associated pneumonia, in which case Pseudomonas is often implicated as the causative pathogen.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/28365056/" target="_blank">Richeldi L, Collard HR, Jones MG. Idiopathic pulmonary fibrosis. Lancet. 2017 May 13;389(10082):1941-1952.</a>`,
      ],
      level: "Easy",
      category: "Infection",
    }),

    //   Q168
    Question_Answer.create({
      question: `In a posteroanterior radiograph of thorax, the following structure forms the left margin of the heart shadow:`,
      questionImage: [],
      answerOptions: [
        `Right auricle.`,
        `Pulmonary trunk.`,
        `Aortic orifice.`,
        `Right ventricle.`,
        `Left common carotid artery`,
      ],
      correctAnswer: `Pulmonary trunk.`,
      explanation: ``,
      explanationImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q168/A168+img1.png`,
      ],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/23168059/" target="_blank">Murillo H, Cutalo MJ, Jones RP, Lane MJ, Fleischmann D, Restrepo CS. Pulmonary circulation imaging: embryology and normal anatomy. Semin Ultrasound CT MR. 2012 Dec;33(6):473-84</a>`,
      ],
      level: "Easy",
      category: "Other Pulmonary Diseases",
    }),

    // Q169
    Question_Answer.create({
      question: `Which of the following structures is transmitted through the aortic opening of the diaphragm?`,
      questionImage: [],
      answerOptions: [
        `Azygous veins.`,
        `Right and left vagus nerves.`,
        `Left gastric vessels.`,
        `Right phrenic nerve.`,
        `Inferior vena cava`,
      ],
      correctAnswer: `Azygous veins.`,
      explanation: `The aorta is transmitted through the diaphragm at the T12 level. Of the structures listed, the azygos vein is the only structure that is also transmitted through the diaphragm at this level.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/31033627/" target="_blank">Rivaud Y, Maldjian PD. The Azygos Vein From A to Z. J Thorac Imaging. 2019 Sep;34(5):W100-W108.</a>`,
      ],
      level: "Easy",
      category: "Other Pulmonary Diseases",
    }),

    //   Q170
    Question_Answer.create({
      question: `Diuretic abuse is commonly associated with`,
      questionImage: [],
      answerOptions: [
        `Respiratory acidosis`,
        `Metabolic acidosis`,
        `Respiratory alkalosis`,
        `Metabolic alkalosis`,
      ],
      correctAnswer: `Metabolic alkalosis`,
      explanation: `Metabolic alkalosis is a disorder that is caused by increased serum bicarbonate levels and arterial pH, associated with hypokalemia. Serum bicarbonate levels are elevated due to excessive hydrogen loss in the urine or gastrointestinal tract. Patients usually develop respiratory compensation by hypoventilation and elevation in arterial PCO2. Some common causes are vomiting, nasogastric suction, loop or thiazide diuretic.

      Surreptitious diuretic use is very common with finding of hyperaldosteronism due to volume depletion, renal chloride loss or contraction alkalosis. Diuretic abuse can also develop chloride unresponsiveness due to profound potassium depletion. (Choice D)

      Metabolic acidosis is when there is an increase in hydrogen ions or loss of bicarbonate in the serum. (↓pH, ↓PCO2, ↓ HCO3). Common causes are of metabolic acidosis with high anion gap: MUDPILES: Methanol, uremia, diabetic ketoacidosis, propylene glycol, paraldehyde, isoniazid, lactic acidosis, ethylene glycol and salicylates. (Choice B)

      Respiratory acidosis is caused by alveolar hypoventilation resulting in CO2 retention. Common causes include COPD exacerbation and bronchial asthma. (↓pH, ↑PCo2, ↑HCO3). (Choice A)

      Respiratory alkalosis happens when there is increased respiratory rate or tidal volume leading to alveolar hyperventilation and Co2 washout. (↑pH, ↓PCO2, ↓HCO3). Causes include pregnancy, high altitude, and drug toxicity from salicylates. (Choice C) `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/28233622/" target="_blank">Bartoli E, Rossi L, Sola D, Castello L, Sainaghi PP, Smirne C. Use, misuse and abuse of diuretics. Eur J Intern Med. 2017 Apr;39:9-17</a>`,
      ],
      level: "Easy",
      category: "Critical Care",
    }),

    //   Q171
    Question_Answer.create({
      question: `Which of the following statements about Pleura is not correct?`,
      questionImage: [],
      answerOptions: [
        `Visceral and parietal are in continuation.`,
        `Both pleurae join at hilum.`,
        `Blood supply comes from systemic circulation.`,
        `Visceral pleura has no pain receptors.`,
        `Divides the left lung into three lobes.`,
      ],
      correctAnswer: `Divides the left lung into three lobes.`,
      explanation: `The pleura does not divide the left lung into three lobes. The left lobe has two lobes, the upper and lower, in addition to the lingula. The right lung has three lobes, upper, middle and lower.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/21477765/" target="_blank">Bertin F, Deslauriers J. Anatomy of the pleura: reflection lines and recesses. Thorac Surg Clin. 2011 May;21(2):165-71, vii</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/9646978/" target="_blank">Wang NS. Anatomy of the pleura. Clin Chest Med. 1998 Jun;19(2):229-40.</a>`,
      ],
      level: "Easy",
      category: "Pleural Diseases",
    }),

    //   Q172
    Question_Answer.create({
      question: `A 55 year old male with a history of COPD, DM, p/w acute hypoxemic respiratory failure from Pneumonia. The pt progresses to severe Acute Respiratory Distress Syndrome  and the patient is placed in a prone position. Which is NOT true about proning?`,
      questionImage: [],
      answerOptions: [
        `It will decrease cardiac compression of the Left lung`,
        `Proning will  improve oxygenation but not mortality`,
        `There will be better V/Q matching`,
        `A majority of patients will have an improvement in hypercapnia`,
      ],
      correctAnswer: `Proning will  improve oxygenation but not mortality`,
      explanation: `Prone positioning has become a standard therapeutic maneuver in patients with severe ARDS. The most significant of the RCTs showed a mortality benefit in ARDS patients with P/F ratio <150 and who were prone for at least 16 hours continuously. The few absolute contraindications are facial fractures or unstable spinal fractures. The main complications usually involve pressure injury or endotracheal tube occlusion or dislodgement.

      Not all patients who are prone have an improvement with oxygenation but the majority will have benefit (approximately 70%). There is also a similar benefit in CO2 clearance. There may be a neutral to beneficial hemodynamic response. There are multiple mechanisms to the benefit in oxygenation including the heart no longer compressing the Left lung, improved net lung recruitment (secondary to increased dorsal lung mass opening) during pronation and improved V/Q matching. This is partly due to more homogenous inflation in proning. Importantly the mortality benefit seen with proning is not solely related to improved hypoxemia but also from the decrease in ventilator induced lung injury associated with the above changes.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/33169218/" target="_blank">C Guerin et al. Prone position in ARDS patients: why, when, how and for whom. Intensive Care Medicine. 2020</a>`,
      ],
      level: "Easy",
      category: "Critical Care",
    }),

    //   Q173
    Question_Answer.create({
      question: `Situations in which surgical intervention usually is necessary in patients with parapneumonic effusion includes all of the following except:`,
      questionImage: [],
      answerOptions: [
        `Lack of clinical and radiologic response to initial medical management (eg, antibiotics, chest tube drainage, and fibrinolytic therapy for three to four days)`,
        `Persistent sepsis in association with persistent pleural collection, despite chest tube drainage and antibiotics`,
        `Complex empyema with significant lung pathology (eg, development of a thick fibrous pleural rind, sometimes termed a "peel," which may "trap" the lung and prevent lung re-expansion`,
        `Bronchopleural fistula with pyopneumothorax`,
        `Presence of multiple loculations on CT scan`,
      ],
      correctAnswer: `Presence of multiple loculations on CT scan`,
      explanation: `Patients with parapneumonic effusions may show evidence of multiple loculations on CT Scan Chest. Using fibrinolytic drugs to lyse the fibrinous strands in loculated parapneumonic effusions has been described in adults and children. If that fails, then these patients can be considered for surgical management.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/30955515/" target="_blank">Aboudara M, Maldonado F. Update in the Management of Pleural Effusions. Med Clin North Am. 2019 May;103(3):475-485</a>`,
      ],
      level: "Moderate",
      category: "Pleural Diseases",
    }),

    //   Q174
    Question_Answer.create({
      question: `Miliary shadows on HRCT chest is seen in all of the following conditions EXCEPT: `,
      questionImage: [],
      answerOptions: [
        `Histoplasmosis`,
        `Silicosis`,
        `Idiopathic pulmonary fibrosis`,
        `Sarcoidosis`,
      ],
      correctAnswer: `Idiopathic pulmonary fibrosis`,
      explanation: `Miliary shadows in the lung are not uncommon and are seen in wide variety of diseases. The term miliary nodules is described as random and peripheral distribution and 1-2 mm in size, Random micronodules can result from hematogenous spread of infections or neoplasms. Differential diagnosis of miliary radiological patterns are miliary tuberculosis, primary or secondary pulmonary malignancy, sarcoidosis, pneumoconiosis or histoplasmosis.

      Histoplasmosis is rare clinical diagnosis acquired by inhalation of yeast. Clinical presentations can mimic tuberculosis with upper lobe cavitation, nodular shadows and miliary nodules. Random distribution is also seen in tuberculosis and silicosis.

      The characteristic HRCT features of IPF include peripheral, basilar predominant reticular opacities associated with honeycombing and traction bronchiectasis-bronchiolectasis.
      `,
      explanationImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q174/A174+img1.png`,
      ],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/26628775/" target="_blank">Sharma BB, Miliary nodules on chest radiographs: A diagnostic dilemma. Lung India. 2015 Sep-Oct; 32(5): 518–520.
      </a>`,
      ],
      level: "Easy",
      category: "Other Pulmonary Diseases",
    }),

    //   Q175
    Question_Answer.create({
      question: `All the following are clinical features of nicotine withdrawal EXCEPT:`,
      questionImage: [],
      answerOptions: [
        `Insomnia`,
        `Decreased appetite and weight loss`,
        `Depression`,
        `Difficulty in concentrating`,
      ],
      correctAnswer: `Decreased appetite and weight loss`,
      explanation: `Nicotine is a potent psychoactive drug that causes physical dependence and tolerance. A smoker can develop symptoms of withdrawal in the absence of nicotine and craving for cigarettes. Symptoms can peak in the first three days over the next three to four weeks. Some common nicotine withdrawal symptoms include:

      Increased appetite or weight gain
      Dysphoria, depressed mood, or anhedonia
      Insomnia
      Irritability, frustration, or anger
      Anxiety
      Difficulty concentrating
      Restlessness

      Weight gain can commonly occur after smoking cessation. The mechanism of weight gain is decreased metabolic rate, increased activity of lipoprotein lipase, and increased caloric intake. Average total weight gain is from 4 to 5 kg but can be more in females. Behavioral counseling such as dietary and physical activity intervention have been successful for patients who have gained weight. Phrenological interventions such as bupropion can be also be helpful temporarily.

      Patients with a history of psychotic illnesses are susceptible to symptoms of depression. Patients who have documented depression, smoking cessation have been reported to trigger depressive episodes that need behavioral counseling, medications or both. Despite these triggered depressive episodes, benefits of smoking cessation outweigh the risk in patients with psychotic illness.
      `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/11844853/" target="_blank">Rigotti NA, Clinical practice: Treatment of tobacco use and dependence, N Engl J Med. 2002 Feb 14;346(7):506-12. </a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/15086863/" target="_blank">Filozof C, Smoking cessation and weight gain, Obes Rev. 2004 May;5(2):95-103. </a>`,
      ],
      level: "Easy",
      category: "Other Pulmonary Diseases",
    }),

    //   Q176
    Question_Answer.create({
      question: `Pulsus paradoxus may occur in all the following conditions EXCEPT:`,
      questionImage: [],
      answerOptions: [
        `Acute severe asthma`,
        `Cardiac tamponade`,
        `Acute exacerbation of chronic obstructive airways disease`,
        `Complete heart block`,
      ],
      correctAnswer: `Complete heart block`,
      explanation: `Pulsus paradoxus is an exaggerated fall in an individual’s blood pressure during inspiration by greater than 10 mm Hg.

      A patient with acute severe asthma presents with tightness of lung airway. The lungs will overinflate, putting extra pressure on the veins carrying oxygenated blood from the heart to the lungs. This causes blood to be backed up in the right ventricle and extra pressure to build up on the right side of the heart, pressing against the left side. This all results in pulsus paradoxus. Similar mechanism is seen in exacerbation of COPD. (Choice A & C)

      When fluid accumulates in the pericardial space in cardiac tamponade, the intrapericardial pressures increases and the right heart is compressed resulting in increased the right heart pressures. This results in the right heart relying more heavily on the decreased intrathoracic pressures during inspiration to fill, exaggerating the pressure change causing pulsus paradoxus. (Choice B).`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/29873194/" target="_blank">Sarkar M, Bhardwaj R, Madabhavi I, Gowda S, Dogra K. Pulsus paradoxus. Clin Respir J. 2018 Aug;12(8):2321-2331</a>`,
        `<a href="https://www.ncbi.nlm.nih.gov/books/NBK482292/" target="_blank">Van Dam MN, Fitzgerald BM. Pulsus Paradoxus. 2020 Jul 21. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2020 Jan</a>`,
      ],
      level: "Easy",
      category: "Other Pulmonary Diseases",
    }),

    //   Q177
    Question_Answer.create({
      question: `Reduced total lung capacity (TLC) is seen in all of the following conditions EXCEPT:`,
      questionImage: [],
      answerOptions: [
        `Interstitial lung disease`,
        `Pulmonary fibrosis`,
        `Pneumothorax`,
        `Emphysema`,
      ],
      correctAnswer: `Emphysema`,
      explanation: `Patients with restrictive lung diseases cannot fully fill their lungs with air. It is characterized by reduced lung volume due to parenchymal, pleural or extrapulmonary respiratory diseases. Unlike obstructive diseases such as asthma, COPD and emphysema (Choice D), which shows normal or increased total lung capacity (TLC), restrictive diseases are associated with decreased TLC. Both forced expiratory volume in one second (FEV1) and forced vital capacity (FVC) are reduced. FEV1/FVC ratio should be normal. Common examples of restrictive lung diseases are interstitial lung disease, pulmonary fibrosis and pneumothorax. (Choice A, B, C)

      Obstructive lung disease is when there is increased resistance to air flow caused by narrowing of the airways. Spirometry findings include decreased FEV1, decreased FEV1/FVC ratio, Decreased Vital Capacity (VC), increased RV with normal TLC.
      `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/27555617/" target="_blank">McCartney CT, Weis MN, Ruppel GL, Nayak RP. Residual Volume and Total Lung Capacity to Assess Reversibility in Obstructive Lung Disease. Respir Care. 2016 Nov;61(11):1505-1512.</a>`,
      ],
      level: "Easy",
      category: "Pulmonary Function Testing",
    }),

    //   Q178
    Question_Answer.create({
      question: `
      A 65-year-old male, a chronic smoker is presented with cough, recurrent hemoptysis for the last 2 weeks. There is no history of fever or weight loss. There is no past history of having been treated for tuberculosis. On clinical examination there are signs of collapse of the right lung. On bronchoscopy there was a mass completely obstructing the right main bronchus. A forceps biopsy was taken and malignancy was confirmed. The most likely histopathological diagnosis is:`,
      questionImage: [],
      answerOptions: [
        `Adenocarcinoma`,
        `Squamous cell carcinoma`,
        `Small cell carcinoma`,
        `Bronchial carcinoid`,
      ],
      correctAnswer: `Squamous cell carcinoma`,
      explanation: `Lung cancer is the most common cancer worldwide and has more than doubled according to the World Health Organization. The information about lung malignancies is shown below:
      `,
      explanationImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q178/A178+img1.png`,
      ],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/18125024/" target="_blank"> Davenport LF, Wyman SM, et al. Squamous-cell carcinoma of lung. N Engl J Med. 1949 Apr 14;240(15):611-4.</a>`,
      ],
      level: "Easy",
      category: "Lung Cancer",
    }),

    //   Q179
    Question_Answer.create({
      question: `Smoking can have an adverse effect on the following endocrine disorders EXCEPT:`,
      questionImage: [],
      answerOptions: [
        `Goiter`,
        `Diabetes mellitus`,
        `Adrenal Hyperplasia`,
        `Grave’s disease`,
      ],
      correctAnswer: `Adrenal Hyperplasia`,
      explanation: `Goiter can occur in puberty and pregnancy, but other causes include iodine deficiency and autoimmune origin. The prevalence of non-toxic goiter is higher in smokers compared to non-smokers due to thiocyanate (inhibitor of iodide transport). In patients with Graves’ disease, smoking worsens thyroid-associated ophthalmopathy which is result of inflammation, excess production of glycosaminoglycans and adipogenesis. This leads to increase fatty connective tissue and extraocular muscle bodies.

      Cigarette smoking changes insulin secretion of β cells of the pancreas and insulin resistance leading to impaired glucose homeostasis. Endothelial dysfunction is the key mediator for development of vascular complications of diabetes mellitus.
      `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/22561025/" target="_blank">Tweed JO, The endocrine effects of nicotine and cigarette smoking. Trends Endocrinol Metab. 2012 Jul; 23(7):334-342  </a>`,
      ],
      level: "Hard",
      category: "Other Pulmonary Diseases",
    }),

    //   Q180
    Question_Answer.create({
      question: `A medical student witnesses a helium-dilution test as part of her pulmonary rotation. What is the endpoint when performing this test?`,
      questionImage: [],
      answerOptions: [
        `The helium concentration in the lung is at its lowest.`,
        `The helium concentration in the spirometer is at its highest.`,
        `The helium within the spirometer-patient system is eliminated.`,
        `The helium concentration equilibrates throughout the spirometer-patient system.`,
      ],
      correctAnswer: `The helium concentration equilibrates throughout the spirometer-patient system.`,
      explanation: `When performing the helium dilution test to determine static lung volumes, the test is conducted until the helium concentration has equilibrated throughout the spirometer-patient system. The changes in concentration and volume can then be applied to Boyle’s Law in order to calculate the FRC and derive the RV and TLC. It is important to understand that the setup for this test is a closed system, and so the helium will not be eliminated. `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/16135736/" target="_blank">Wanger J, Clausen JL, Coates A, et al. Standardisation of the measurement of lung volumes. Eur Respir J 2005; 26: 511-522. </a>`,
      ],
      level: "Hard",
      category: "Pulmonary Function Testing",
    }),

    //   Q181
    Question_Answer.create({
      question: `A patient undergoes pulmonary function testing. He is found to have a DLCO that is higher than predicted. Which of the following pre-test conditions is likely to have influenced his test result?`,
      questionImage: [],
      answerOptions: [
        `Polycythemia`,
        `COPD`,
        `Congestive heart failure`,
        `Asbestosis`,
      ],
      correctAnswer: `Polycythemia`,
      explanation: `Polycythemia is defined by an increase in the number of red blood cells. This increase is quantified using the hemoglobin. At a hemoglobin above 16.5 g/dL in men or 16 g/dL in women, a patient is said to have polycythemia. In such a state, there is an increase in the amount of CO that can be carried by the red blood cells, which is reflected by an increase in the DLCO.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/663416/" target="_blank">Riepl G: Effects of Abnormal Hemoglobin Concentration in Human Blood on Membrane Diffusing Capacity of the Lung and on Pulmonary Capillary Blood Volume. Respiration 1978;36:10-18. </a>`,
      ],
      level: "Hard",
      category: "Pulmonary Function Testing",
    }),

    //   Q182
    Question_Answer.create({
      question: `Which is true regarding outcomes in cardiac arrest?`,
      questionImage: [],
      answerOptions: [
        `Optimizing Coronary perfusion pressure to goal (CPP) <15`,
        `There is poor association between Coronary perfusion pressure and outcomes`,
        `Optimizing Coronary perfusion pressure to goal CPP>20`,
        `CPP is useful only in primarily VT/VF associated cardiac arrest`,
      ],
      correctAnswer: `Optimizing Coronary perfusion pressure to goal CPP>20`,
      explanation: `CPP optimization is the primary physiologic goal in cardiac arrest treatment as myocardial blood flow is a primary determinant for success. CPP can be calculated by subtracting the Right Atrial Pressure from the Diastolic Blood Pressure. As coronary blood flow occurs in diastole the relaxation phase of CPR becomes important in allowing passive flow into the coronary arteries. Success is related to when CPP>20mmHg and when diastolic blood pressure >25mmHg. Although it is not routinely measured during inpatient cardiac arrest but is measurable if arterial line and central line present.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/23801105/" target="_blank">PA Meaner et al. Cardiopulmonary Resuscitation Quality: Improving Cardiac Resuscitation Outcomes Both Inside and Outside the Hospital. A Consensus Statement. Circulation. 20113</a>`,
      ],
      level: "Easy",
      category: "Critical Care",
    }),

    //   Q183
    Question_Answer.create({
      question: `A 55-year-old male is diagnosed by having sputum positive pulmonary tuberculosis. He was put on Category-1 anti tuberculosis regimen. After three weeks of starting treatment, he complained of severe loss of appetite, vomiting and pain in the abdomen.  On investigation he had the following results of liver function test. Bilirubin 1.5 mg/dl, SGOT 357 U/L, SGPT 445 U/L. All of the following steps for his management are correct EXCEPT:`,
      questionImage: [],
      answerOptions: [
        `Stop Isoniazid`,
        `Stop pyrazinamide`,
        `Stop Rifampicin`,
        `Stop Ethambutol`,
      ],
      correctAnswer: `Stop Rifampicin`,
      explanation: `Out of all the answer choices, liver injury from rifampin is uncommon compared to other drugs. Rifampicin causes minor transient elevations in serum aminotransferase levels and bilirubin levels. INH is more commonly associated with hepatotoxicity in the first eight weeks of therapy. INH-induced hepatotoxicity causes AST elevation three times the upper limit in patients with symptoms of nausea, vomiting, abdominal pain and jaundice. All other side effects are stated in the chart below.`,
      explanationImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q183/A183+img1.png`,
      ],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/31643176/" target="_blank">LiverTox: Clinical and Research Information on Drug-Induced Liver Injury [Internet]. Bethesda (MD): National Institute of Diabetes and Digestive and Kidney Diseases; 2012. Rifampin. [Updated 2018 Jun 10].</a>`,
      ],
      level: "Easy",
      category: "Infection",
    }),

    //   Q184
    Question_Answer.create({
      question: `Following bacteria are most commonly cultured during acute exacerbation of COPD except:`,
      questionImage: [],
      answerOptions: [
        `Moraxella catarrhalis`,
        `Haemophilus influenzae`,
        `Pseudomonas cepacia`,
        `Streptococcus pneumonia`,
      ],
      correctAnswer: `Pseudomonas cepacia`,
      explanation: `The most common bacterial species isolated from acute exacerbation of COPD are
      nontypeable Haemophilus influenzae, Moraxella catarrhalis, and Streptococcus pneumoniae. These bacteria species are also predominant in other respiratory infections like otitis media and sinusitis. Less isolated bacterial species are Haemophilus
      parainfluenzae, Staphylococcus aureus, Pseudomonas aeruginosa, and gram-negative Enterobacteriaceae. H. parainfluenzae and S. aureus `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/16113422/" target="_blank">Sethi S. Bacteria in Exacerbations of Chronic Obstructive Pulmonary Disease. Proc Am Thorac Soc. 2004;1(2):109-14.</a>`,
      ],
      level: "Easy",
      category: "Chronic Obstructive Pulmonary Disease",
    }),

    //   Q185
    Question_Answer.create({
      question: `A 56-year-old female nonsmoker presents with cough and expectoration, shortness of breath on excretion and hemoptysis. She is diagnosed with be having endobronchial lesion on CT scan. On examination she has moon facies and buffalo hump. The blood pressure is 184/106 mm Hg. She also has proximal muscle weakness and radiological investigation reveals severe osteoporosis. The most probable histopathology in this patient is:`,
      questionImage: [],
      answerOptions: [
        `Squamous cell carcinoma`,
        `Adenocarcinoma`,
        `Small cell carcinoma`,
        `Bronchial carcinoid`,
      ],
      correctAnswer: `Bronchial carcinoid`,
      explanation: `Bronchopulmonary carcinoid tumors arise from neuroendocrine cells and have association with Cushing’s syndrome resulting in ectopic secretion of adrenocorticotropic hormone (ACTH). Carcinoid tumors are well-defined, round, or oval enhancing mass located within the central airway. Majority are located in the main, lobar or segmental bronchi. Common symptoms due to increased cortical levels are central obesity, purple striae on the abdomen, round facies, metabolic syndrome, early appearance of psychological disorder and hypertension. Some patients can also present with recurrent pneumonia, cough, hemoptysis and chest pain.  Surgical resection is the preferred treatment of these tumors.

      Central tumors give rise to squamous cell carcinoma and small cell carcinoma.
      Adenocarcinoma is located peripherally. All of these cancers are associated with lung cancer.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/26923475/" target="_blank">Pedicelli I, Cushing like syndrome in typical bronchial carcinoid case report and review of the literature. Int J Surg Case Rep. 2016; 20(Suppl):1-4 </a>`,
      ],
      level: "Easy",
      category: "Lung Cancer",
    }),

    //   Q186
    Question_Answer.create({
      question: `Which of the following is not a consequence of hypoxemia in chronic respiratory failure?`,
      questionImage: [],
      answerOptions: [
        `Right heart failure.`,
        `Pulmonary vasodilatation.`,
        `Increased erythropoiesis.`,
        `Peripheral cyanosis.`,
        `Central cyanosis.`,
      ],
      correctAnswer: `Pulmonary vasodilatation.`,
      explanation: `In the pulmonary vasculature, hypoxia causes vasoconstriction rather than vasodilation. Systemically, hypoxemia triggers vasodilation in order to increase perfusion to the tissues. In the pulmonary vasculature, however, hypoxia is a trigger for vasoconstriction in order to shunt blood towards alveoli that are being adequately ventilated.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/14621112/" target="_blank">Roussos C, Koutsoukou A. Respiratory failure. Eur Respir J Suppl. 2003 Nov;47:3s-14s</a>`,
      ],
      level: "Easy",
      category: "Critical Care",
    }),

    //   Q187
    Question_Answer.create({
      question: `A 55 yo M hx alcohol abuse, cirrhosis, asthma is admitted to the hospital with alcohol withdrawal. His course is complicated by worsening mental status and hypotension and he is intubated and transferred to ICU. The ventilator is set AC 80% peep 5 Vt 500 RR 20 with peak pressures of 42 and Plateau 38. The pt is hemodynamically stable after vasopressor initiation and the patient is now anuric. He has b/l air entry without wheeze or crackles, normal heart sounds and tense, distended abdomen. POCUS is significant for normal cardiac function, b/l basal consolidations and simple ascites. ABG significant for pH 7.34 and Pao2 198. Which would be the best next step?`,
      questionImage: [],
      answerOptions: [
        `Paralyze and prepare for proning`,
        `Perform large volume paracentesis`,
        `Start albumin and octreotide`,
        `IR evaluation for Transjugular intrahepatic portosystemic shunt (TIPS)`,
      ],
      correctAnswer: `Perform large volume paracentesis`,
      explanation: `The patient’s presentation is concerned for Abdominal Compartment Syndrome (ACS) and a large volume paracentesis would be helpful in decreasing the intra abdominal pressure and improving organ function.
      ACS is typically defined by an increased intraabdominal pressure (IAP) >20mmHg as well as presence of organ dysfunction. ACS is associated with increased mortality and significant organ dysfunction and recognized and treated early. If the IAP is >12 this is considered Intra Abdominal Hypertension (IAH) but there can still be significant organ dysfunction present at this range in some individuals -These could include kidney injury, cardiac dysfunction, bowel ischemia. The increased ascites will also cause elevation of the diaphragm, decreased pulmonary compliance and in mechanically ventilated patients a high peak inspiratory pressure and plateau pressure.
      The etiology in this patient is likely massive ascites but ACS is also frequently seen in surgical patients (especially patients with trauma, post bowel surgery and liver transplant). Large volume drainage of ascites will likely relieve the elevated pressure and improve organ function in this patient. In surgical conditions decompressing the abdomen and leaving the abdomen open with temporary closure is used.
      Medical paralysis in this patient may improve ventilator synchrony and decrease abdominal muscle activity but this nor proning would treat the underlying etiology. Intravascular volume with albumin may improve abdominal perfusion pressure but it also would not treat the underlying cause. TIPS may be useful in controlling refractory ascites in the future but would not be the first treatment in this patient who needs an intervention to improve his condition immediately.
      `,
      explanationImage: [],
      explanationLinks: [],
      level: "Moderate",
      category: "Critical Care",
    }),

    //   Q188
    Question_Answer.create({
      question: `About Vital Capacity all are correct except:`,
      questionImage: [],
      answerOptions: [
        `Reduced with advanced age.`,
        `Greater in men than women of the same age.`,
        `Related to lean body mass.`,
        `Equal to sum of inspiratory and expiratory reserve volume.`,
        `It is the same as FVC in normal subjects.`,
      ],
      correctAnswer: `Equal to sum of inspiratory and expiratory reserve volume.`,
      explanation: `Vital capacity (VC) refers to the maximal volume of air that can be expired following maximum inspiration. It is the total of tidal volume, inspiratory reserve volume, and expiratory reserve volume (VC = V + IRV + ERV). It decreased with age and was greater in men than females in the same age group. Also, it is decreased with body mass. Generally VC is measured as forced vital capacity on spirometry.
      Vital capacity may be measured as inspiratory vital capacity (IVC), slow vital capacity (SVC), or forced vital capacity (FVC). The FVC is similar to VC, but it is measured as the patient exhales with maximum speed and effort.
      `,
      explanationImage: [],
      explanationLinks: [],
      level: "Moderate",
      category: "Pulmonary Function Testing",
    }),

    //   Q189
    Question_Answer.create({
      question: `Which statement is correct about Residual Volume?`,
      questionImage: [],
      answerOptions: [
        `The amount of air left in lungs after maximal expiration.`,
        `More in men than women.`,
        `About 0.5 L in an adult.`,
        `Measured by spirometry.`,
        `Smaller in older age.`,
      ],
      correctAnswer: `The amount of air left in lungs after maximal expiration.`,
      explanation: `Residual volume (RV) is the volume of air remaining in the lungs after maximum forceful expiration. It increases with age, and it can vary from 1.5-1.6 L in adults. It is more in men than women of the same age. It cannot be measured by spirometry.
      Residual volume is determined by competing factors: the strength of the expiratory muscles and the inwards pull of the lungs tending to decrease residual volume, and the outward pull of the chest wall tending to increase residual volume.
      Residual volume is the only lung volume that is not decreased with respiratory muscle weakness.`,
      explanationImage: [
        `https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q189/A189+img1.png`,
      ],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/32156791/" target="_blank">Haynes JM, Kaminsky DA, Stanojevic S, Ruppel GL. Pulmonary Function Reference Equations: A Brief History to Explain All the Confusion. Respir Care. 2020 Jul;65(7):1030-1038</a>`,
      ],
      level: "Moderate",
      category: "Pulmonary Function Testing",
    }),

    //   Q190
    Question_Answer.create({
      question: `All about Pulmonary Dead Space are correct except:`,
      questionImage: [],
      answerOptions: [
        `It decreased during general anesthesia.`,
        `It decreased during deep inspiration.`,
        `It decreases with anticholinergic medications.`,
        `Anatomic dead space decreases during sleep.`,
        `Saturates air with water vapors.`,
      ],
      correctAnswer: `It decreases with anticholinergic medications.`,
      explanation: `Dead space is the volume of a breath that does not participate in gas exchange. It is ventilation without perfusion.
      Physiologic or total dead space is the sum of anatomic dead space and alveolar dead space.
      Anatomic dead space is the volume of gas within the conducting zone (as opposed to the transitional and respiratory zones) and includes the trachea, bronchus, bronchioles, and terminal bronchioles; it is approximately 2 mL/kg in the upright position. Alveolar dead space is the volume of gas within unperfused alveoli (and thus not participating in gas exchange either); it is usually negligible in the healthy, awake patient. The ratio of physiologic dead space to tidal volume is usually about 1/3.

      Factors that increase dead space: are General anesthesia – [ due to loss of skeletal muscle tone and bronchoconstrictor tone],
      Neck extension and jaw protrusion (can increase it twofold), Positive pressure ventilation (i.e. increased airway pressure),
      Upright posture as opposed to supine (because of decreased perfusion to the uppermost alveoli),
      Pulmonary embolus, PA thrombosis, hemorrhage, hypotension, surgical manipulation of pulmonary artery tree – anything that decreases perfusion to well-ventilated alveoli, Emphysema, increasing age, Anticholinergic drugs[ Anticholinergics relax the bronchial smooth musculature, which reduces airway resistance and increases anatomic dead space. Similarly  inspiration increases bronchial diameter and length, effectively increasing the anatomic dead space. On the other hand  exhalation decreases the amount of anatomic dead space by "deflating" the bronchial tree. Anatomic dead space is believed to decrease during sleep and be the primary physiologic cause of observed decreases in tidal volume, minute ventilation during sleep.
      Similarly  inspiration increases bronchial diameter and length, effectively increasing the anatomic dead space. On the other hand  exhalation decreases the amount of anatomic dead space by "deflating" the bronchial tree. Anatomic dead space is believed to decrease during sleep and be the primary physiologic cause of observed decreases in tidal volume, minute ventilation during sleep`,
      explanationImage: [],
      explanationLinks: [],
      level: "Easy",
      category: "Pulmonary Function Testing",
    }),

    //   Q191
    Question_Answer.create({
      question: `Spirometry tests are used to demonstrate all of the following in obstructive airway disease
      except:`,
      questionImage: [],
      answerOptions: [
        `Airflow limitation.`,
        `Functional respiratory reserve.`,
        `Reversibility of airflow limitation over time.`,
        `Hyper responsiveness by using challenge tests.`,
        `Reversibility of airflow limitation with inhalation of a bronchodilator`,
      ],
      correctAnswer: `Functional respiratory reserve.`,
      explanation: `Spirometry helps diagnosing obstructive lung disease by evaluating FeV1/FVC. If FeV/FVC  is less than the lower limit of normal  then  airflow limitation is present. During spirometry air responsiveness can be evaluated using beta agonist challenge. That test also evaluates reversibility of airflow limitation. Serial spirometry overtime can help evaluate reversibility of airflow limitation.`,
      explanationImage: [],
      explanationLinks: [],
      level: "Easy",
      category: "Pulmonary Function Testing",
    }),

    //   Q192
    Question_Answer.create({
      question: `Which of the following gas is used to decrease pulmonary artery pressure in adults:`,
      questionImage: [],
      answerOptions: [
        `Nitrous Oxide.`,
        `Helium.`,
        `Nitric Oxide.`,
        `Nitrogen.`,
        `Carbon dioxide`,
      ],
      correctAnswer: `Nitric Oxide.`,
      explanation: `Nitric oxide is a pulmonary artery vasodilator. It is a phosphodiesterase inhibitor (PDE-5).`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/20498805/" target="_blank">Sim JY. Nitric oxide and pulmonary hypertension. Korean J Anesthesiol. 2010 Jan;58(1):4-14.</a>`,
      ],
      level: "Easy",
      category: "Pharmacology",
    }),

    //   Q193
    Question_Answer.create({
      question: `Organophosphates cause bronchospasm by stimulating which of the following receptor types?`,
      questionImage: [],
      answerOptions: [`M1.`, `M2.`, `M3.`, `M4.`, `M5.`],
      correctAnswer: `M3.`,
      explanation: `Organophosphates are capable of irreversibly inhibiting acetylcholinesterase. As a result, acetylcholine builds up within the neuronal synapse and is capable of continuing signal propagation. The built-up acetylcholine can stimulate M3 receptors, which ultimately cause bronchoconstriction. This explains why there is bronchoconstriction during organophosphate poisoning.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/23179755/" target="_blank">Soukup O, Jun D, Tobin G, Kuca K. The summary on non-reactivation cholinergic properties of oxime reactivators: the interaction with muscarinic and nicotinic receptors. Arch Toxicol. 2013 Apr;87(4):711-9.</a>`,
      ],
      level: "Easy",
      category: "Pharmacology",
    }),

    //   Q194
    Question_Answer.create({
      question: `The primary role of alpha1-antitrypsin (AAT) is inhibition of which one of the following choices?`,
      questionImage: [],
      answerOptions: [
        `Caspase 8`,
        `Glucose-6-phosphate dehydrogenase`,
        `Leukocyte esterase`,
        `Neutrophil elastase`,
      ],
      correctAnswer: `Neutrophil elastase`,
      explanation: `AAT is synthesized in the liver and secreted into circulation, where its primary role is to protect the lung tissue against attack by the enzyme neutrophil elastase. Most persons carry two copies of the wild type M allele of SERPINA1, which encodes AAT and have a normal circulating level of the protein. Ninety five percent of severe cases of AAT deficiency result from the homozygous substitution of a single amino acid, Glu342lys [the Z allele]. AAT deficiency predisposes homozygotes with severe deficiency to early onset panacinar emphysema.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/21367592/" target="_blank">Janciauskiene SM, Bals R, Koczulla R, Vogelmeier C, Köhnlein T, Welte T. The discovery of α1-antitrypsin and its role in health and disease. Respir Med. 2011 Aug;105(8):1129-39.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/24507836/" target="_blank">Stockley RA. Alpha1-antitrypsin review. Clin Chest Med. 2014 Mar;35(1):39-50.</a>`,
      ],
      level: "Easy",
      category: "Pharmacology",
    }),

    //   Q195
    Question_Answer.create({
      question: `Which of the following mechanisms reflects the way in which B-agonists produce bronchodilation?`,
      questionImage: [],
      answerOptions: [
        `Decreasing adenosine.`,
        `Increasing cyclic AMP.`,
        `Decreasing cyclic AMP.`,
        `Phosphodiesterase inhibition.`,
        `Blocking muscarinic receptors.`,
      ],
      correctAnswer: `Increasing cyclic AMP.`,
      explanation: `Beta-agonists, such as albuterol, can be used to produce bronchodilation. These drugs typically accomplish this by stimulating beta-2 receptors which operate through Gs G-protein signaling. The downstream effect of Gs protein activation is an increase in cyclic AMP which causes bronchodilation.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/27878470/" target="_blank">Billington CK, Penn RB, Hall IP. β2 Agonists. Handb Exp Pharmacol. 2017;237:23-40.</a>`,
      ],
      level: "Easy",
      category: "Pharmacology",
    }),

    //   Q196
    Question_Answer.create({
      question: `Which of the following statements about the angle of Louis is incorrect?`,
      questionImage: [],
      answerOptions: [
        `Helps in rib counting.`,
        `Lies at T2.`,
        `Carotid bifurcation occurs at this level.`,
        `It is prominent in thin subjects.`,
        `Bronchial breathing may be heard over it.`,
      ],
      correctAnswer: `Carotid bifurcation occurs at this level.`,
      explanation: `The carotid bifurcation refers to the split of the common carotid artery into the external and internal carotid arteries. This split occurs at approximately the C3/C4 level. The angle of Louis refers to the point at which the manubrium and the sternum are joined, which lies at the T2 level. This point can be easily palpated in thin patients and is especially useful in identifying ribs as the second rib can be felt alongside it on either side of the sternum.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://www.ncbi.nlm.nih.gov/books/NBK459336/" target="_blank">Ball M, Falkson SR, Adigun OO. Anatomy, Angle of Louis. 2020 Jul 31. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2020 Jan</a>`,
      ],
      level: "Easy",
      category: "Other Pulmonary Diseases",
    }),

    //   Q197
    Question_Answer.create({
      question: `A patient came to the hospital with a fracture of the manubrium sterni. Which structure is likely to be injured in such a case?`,
      questionImage: [],
      answerOptions: [
        `Ascending aorta.`,
        `Descending thoracic aorta.`,
        `Right brachiocephalic vein.`,
        `Inferior vena cava.`,
        `Brachiocephalic artery.`,
      ],
      correctAnswer: `Brachiocephalic artery.`,
      explanation: `Brachiocephalic artery is also called an innominate artery. It arises from the aortic arch at the level of second costal cartilage. It is the first and largest branch of the aortic arch that supplies the head, neck and the right arm. It divides into the right common carotid artery and right subclavian artery at the border of the right sternoclavicular joint.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/29707289/" target="_blank">Schulz-Drost S, Krinner S, Oppel P, Grupp S, Schulz-Drost M, Hennig FF, Langenbach A. Fractures of the manubrium sterni: treatment options and a possible classification of different types of fractures. J Thorac Dis. 2018 Mar;10(3):1394-1405</a>`,
      ],
      level: "Easy",
      category: "Other Pulmonary Diseases",
    }),

    //   Q198
    Question_Answer.create({
      question: `A 49-year-old miner develops smear-positive mycobacterium tuberculosis. Which of the following dusts is most likely to have increased the risk of this infection in this patient?`,
      questionImage: [],
      answerOptions: [
        `Coal dust.`,
        `Asbestos.`,
        `Cadmium.`,
        `Silica.`,
        `Beryllium.`,
      ],
      correctAnswer: `Silica.`,
      explanation: `Silica exposure can increase risk of TB. Silicosis is a common progressive occupational disease. It occurs after 10-20 years of exposure to silica. Patients present with exertional dyspnea, productive cough. On chest x-ray, small round opacities can be seen on upper zones of the lung. Silicosis is associated with TB but recent studies have shown that silica is associated with TB even in the absence of silicosis.`,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/17439668/" target="_blank">Rees D, Murray J. Silica, silicosis and tuberculosis. Int J Tuberc Lung Dis. 2007 May;11(5):474-84.</a>`,
      ],
      level: "Easy",
      category: "Interstitial Lung Diseases",
    }),

    //   Q199
    Question_Answer.create({
      question: `Which type of non-small cell lung cancer (NSCLC) can develop in patients who have never smoked?`,
      questionImage: [],
      answerOptions: [
        `Adenocarcinoma`,
        `Large cell carcinoma`,
        `Squamous cell carcinoma`,
        `Atypical carcinoids`,
      ],
      correctAnswer: `Adenocarcinoma`,
      explanation: `According to the National Cancer Institute's PDQ Information Summary for Health Professionals on NSCLC treatment, adenocarcinoma, large cell carcinoma, and squamous cell carcinoma are the three most common types of NSCLC. Whereas NSCLCs, especially squamous cell carcinomas, are associated with smoking, adenocarcinomas may be found in patients who have never smoked.
      PDQ Adult Treatment Editorial Board. Non-Small Cell Lung Cancer Treatment (PDQ) – Health Professional Version. Bethesda, MD: National Cancer Institute. Updated January 20, 2022.
      `,
      explanationImage: [],
      explanationLinks: [],
      level: "Easy",
      category: "Lung Cancer",
    }),

    //   Q200
    Question_Answer.create({
      question: `Which of the following is not a characteristic of occupational lung diseases?`,
      questionImage: [],
      answerOptions: [
        `Atopic individuals are at an increased risk.`,
        `Wheezing and coughing in a cotton worker may be byssinosis.`,
        `Isocyanates may cause pulmonary edema.`,
        `Berylliosis is steroid responsive.`,
      ],
      correctAnswer: `Isocyanates may cause pulmonary edema.`,
      explanation: `Occupational lung diseases can lead to airway disease like asthma or commonly interstitial lung disease. These are caused by inhalation of dust, chemicals or proteins.

      Occupational asthma (OA) is a form of work-related asthma characterized by airflow obstruction, airway hyperresponsiveness and airway inflammation. The risk factors associated with OA include sex, geographic location, prevalence of atopy, smoking and type of workplace exposure. Atopy is consistently associated with sensitization to high molecular weight agents (HMW). These agents include protein and polysaccharides of animal or plant based. Atopic individuals who are in high-risk workplace should receive regular medical follow-up.

      Chronic exposure to isocyanates can also occupational asthma and hypersensitivity pneumonitis (HP). CT findings of HP are mid-to upper zone predominance of centrilobular ground glass or nodular opacities with mosaic attenuation. Isocyanate does not cause pulmonary edema.

      Byssinosis (cotton dust disease) is an occupational lung disease caused by exposure to cotton dust in inadequately ventilated working environment. Common symptoms are frequent coughing, chest tightness, dyspnea and wheezing within a few hours of exposure in the workplace. Symptoms in the beginning of the work week are termed as Monday fever. Those individuals who remove themselves from the workplace environment and exposure may have resolution of symptoms.

      Berylliosis is a disease caused by exposure to beryllium in industries including metal machine shops, electronics, and defense industries. Most clinical manifestations are nonspecific. The drugs of choice are corticosteroids at high doses and slowly tapered off.
      `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/3024527/" target="_blank">Banks DE, Butcher BT, Salvaggio JE. Isocyanate-induced respiratory disease. Ann Allergy. 1986 Dec;57(6):389-96.</a>`,
        `<a href="https://pubmed.ncbi.nlm.nih.gov/23516692/" target="_blank">Reid PA, Reid PT. Occupational lung disease. J R Coll Physicians Edinb. 2013;43(1):44-8.</a>`,
      ],
      level: "Easy",
      category: "Interstitial Lung Diseases",
    }),

    // <--------------------Sample Layout------------------->
    //   //Qx (sample layout)
    //   Question_Answer.create({
    //     question: ``,
    //     questionImage: [],
    //     answerOptions: [``,``,``,``],
    //     correctAnswer:``,
    //     explanation: ``,
    //     explanationImage: [],
    //     explanationLinks: [
    //         `<a href="" target="_blank"></a>`,
    //      ],
    //     level: "Easy",
    //     category: "Pulmonary Function",
    //   }),
    //----------------- Fake update to questionId 1 to test VCS (Remove after testing)--------------
    Question_Answer.create({
      question:
        "A 45-year-old male comes to the clinic for evaluation for progressive shortness of breath. PFT of the patient suggests which of the following? Pulmonary function tests are provided below: ",
      questionImage: [
        "https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q1/Q1+img1.png",
        "https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q1/Q1img2.png",
      ],
      answerOptions: [
        "Obstructive Lung Disease",
        "Restrictive Lung Disease",
        "Nonspecific Pattern",
        "Mixed Ventilatory Defect",
      ],
      correctAnswer: "Nonspecific Pattern",
      explanation: `An obstructive ventilatory defect is a disproportionate reduction in maximal airflow from the lung in relation to the maximal volume (i.e. vital capacity, VC) that can be displaced from the lung [1]. It is defined by a reduced Forced Expiratory Volume in 1 second (FEV1)/FVC ratio below the 5th percentile of the predicted value as per ATS/ERS task force [1] or less than 0.70.   In this patient FEV1/FVC is normal.

      A restrictive ventilatory defect is characterized by a reduction in TLC below the 5th percentile of the predicted value, and a normal FEV1/FVC. In this patient TLC is normal. A mixed ventilatory defect is characterized by the coexistence of obstruction and restriction and is defined physiologically when both FEV1/FVC and TLC are below the 5th percentiles of their relevant predicted values.  However, in this patient the FEV1/FVC and TLC are normal.

      Non-specific (NS) pulmonary function pattern refers to pulmonary function test (PFT) with a low forced expiratory volume in first second (FEV1) or low forced vital capacity (FVC) or both; with normal FEV1/FVC ratio and normal total lung capacity (TLC). It is generally believed that that NS pattern may be a consequence of an obstructive disease (including asthma, chronic obstructive pulmonary disease [COPD] and bronchiectasis) or can also be seen in those with restricted expansion of the thorax or the lung as seen in Obesity or interstitial processes. [2] `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/16264058/" target="_blank"> Pellegrino R, Viegi G, Brusasco V, Crapo RO, Burgos F, Casaburi R, Coates A, van der Grinten CP, Gustafsson P, Hankinson J, Jensen R, Johnson DC, MacIntyre N, McKay R, Miller MR, Navajas D, Pedersen OF, Wanger J: Interpretative strategies for lung function tests. Eur Respir J. 2005, 26 (5): 948-968.</a>`,
        `<a href='https://pubmed.ncbi.nlm.nih.gov/18812444/' target="_blank">Hyatt RE, Cowl CT, Bjoraker JA, Scanlon PD: Conditions associated with an abnormal nonspecific pattern of pulmonary function tests. Chest. 2009, 135 (2): 419-424.</a>`,
      ],
      level: "Moderate",
      category: "Pulmonary Function Testing",
      ancestorId: 1,
      status: "Inactive",
    }),
    Question_Answer.create({
      question:
        "A 35-year-old male comes to the clinic for evaluation for progressive shortness of breath. PFT of the patient suggests which of the following? Pulmonary function tests are provided below: ",
      questionImage: [
        "https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q1/Q1+img1.png",
        "https://s3.us-east-2.amazonaws.com/medexperts.io/Images/Q1/Q1img2.png",
      ],
      answerOptions: [
        "Obstructive Lung Disease",
        "Restrictive Lung Disease",
        "Nonspecific Pattern",
        "Mixed Ventilatory Defect",
      ],
      correctAnswer: "Nonspecific Pattern",
      explanation: `An obstructive ventilatory defect is a disproportionate reduction in maximal airflow from the lung in relation to the maximal volume (i.e. vital capacity, VC) that can be displaced from the lung [1]. It is defined by a reduced Forced Expiratory Volume in 1 second (FEV1)/FVC ratio below the 5th percentile of the predicted value as per ATS/ERS task force [1] or less than 0.70.   In this patient FEV1/FVC is normal.

      A restrictive ventilatory defect is characterized by a reduction in TLC below the 5th percentile of the predicted value, and a normal FEV1/FVC. In this patient TLC is normal. A mixed ventilatory defect is characterized by the coexistence of obstruction and restriction and is defined physiologically when both FEV1/FVC and TLC are below the 5th percentiles of their relevant predicted values.  However, in this patient the FEV1/FVC and TLC are normal.

      Non-specific (NS) pulmonary function pattern refers to pulmonary function test (PFT) with a low forced expiratory volume in first second (FEV1) or low forced vital capacity (FVC) or both; with normal FEV1/FVC ratio and normal total lung capacity (TLC). It is generally believed that that NS pattern may be a consequence of an obstructive disease (including asthma, chronic obstructive pulmonary disease [COPD] and bronchiectasis) or can also be seen in those with restricted expansion of the thorax or the lung as seen in Obesity or interstitial processes. [2] `,
      explanationImage: [],
      explanationLinks: [
        `<a href="https://pubmed.ncbi.nlm.nih.gov/16264058/" target="_blank"> Pellegrino R, Viegi G, Brusasco V, Crapo RO, Burgos F, Casaburi R, Coates A, van der Grinten CP, Gustafsson P, Hankinson J, Jensen R, Johnson DC, MacIntyre N, McKay R, Miller MR, Navajas D, Pedersen OF, Wanger J: Interpretative strategies for lung function tests. Eur Respir J. 2005, 26 (5): 948-968.</a>`,
        `<a href='https://pubmed.ncbi.nlm.nih.gov/18812444/' target="_blank">Hyatt RE, Cowl CT, Bjoraker JA, Scanlon PD: Conditions associated with an abnormal nonspecific pattern of pulmonary function tests. Chest. 2009, 135 (2): 419-424.</a>`,
      ],
      level: "Moderate",
      category: "Pulmonary Function Testing",
      ancestorId: 1,
      status: "Active",
      displayId: 1,
    }),
  ]);

  // Creating User_Questions
  const user_question = await Promise.all([
    //Question#1
    User_Question.create({
      userId: 1,
      questionAnswerId: 1,
      userInput: "Obstructive Lung Disease",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 2,
      questionAnswerId: 1,
      userInput: "Obstructive Lung Disease",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 3,
      questionAnswerId: 1,
      userInput: "Obstructive Lung Disease",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 4,
      questionAnswerId: 1,
      userInput: "Obstructive Lung Disease",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 5,
      questionAnswerId: 1,
      userInput: "Obstructive Lung Disease",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 6,
      questionAnswerId: 1,
      userInput: "Nonspecific Pattern",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 7,
      questionAnswerId: 1,
      userInput: "Nonspecific Pattern",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 8,
      questionAnswerId: 1,
      userInput: "Nonspecific Pattern",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 9,
      questionAnswerId: 1,
      userInput: "Nonspecific Pattern",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 10,
      questionAnswerId: 1,
      userInput: "Nonspecific Pattern",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),

    //Question#2
    User_Question.create({
      userId: 1,
      questionAnswerId: 2,
      userInput:
        "D-Dimer test appears positive and indicates a need for further evaluation by CTA.",
      userInput:
        "D-Dimer test appears positive and indicates a need for further evaluation by CTA.",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 2,
      questionAnswerId: 2,
      userInput:
        "D-Dimer test appears positive and indicates a need for further evaluation by CTA.",
      userInput:
        "D-Dimer test appears positive and indicates a need for further evaluation by CTA.",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 3,
      questionAnswerId: 2,
      userInput:
        "D-Dimer test appears positive and indicates a need for further evaluation by CTA.",
      userInput:
        "D-Dimer test appears positive and indicates a need for further evaluation by CTA.",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 4,
      questionAnswerId: 2,
      userInput:
        "D-Dimer test appears positive and indicates a need for further evaluation by CTA.",
      userInput:
        "D-Dimer test appears positive and indicates a need for further evaluation by CTA.",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 5,
      questionAnswerId: 2,
      userInput:
        "D-Dimer test appears positive and indicates a need for further evaluation by CTA.",
      userInput:
        "D-Dimer test appears positive and indicates a need for further evaluation by CTA.",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 6,
      questionAnswerId: 2,
      userInput:
        "D-Dimer test is positive and indicates immediate treatment of PE.",
      userInput:
        "D-Dimer test is positive and indicates immediate treatment of PE.",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 7,
      questionAnswerId: 2,
      userInput:
        "D-Dimer test is positive and indicates immediate treatment of PE.",
      userInput:
        "D-Dimer test is positive and indicates immediate treatment of PE.",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 8,
      questionAnswerId: 2,
      userInput:
        "D-Dimer test is positive and indicates immediate treatment of PE.",
      userInput:
        "D-Dimer test is positive and indicates immediate treatment of PE.",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 9,
      questionAnswerId: 2,
      userInput:
        "D-Dimer test is positive and indicates immediate treatment of PE.",
      userInput:
        "D-Dimer test is positive and indicates immediate treatment of PE.",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 10,
      questionAnswerId: 2,
      userInput:
        "D-Dimer test is positive and indicates immediate treatment of PE.",
      userInput:
        "D-Dimer test is positive and indicates immediate treatment of PE.",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),

    //Question#3

    User_Question.create({
      userId: 1,
      questionAnswerId: 3,
      userInput: "Loffler's syndrome",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 2,
      questionAnswerId: 3,
      userInput: "Loffler's syndrome",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 3,
      questionAnswerId: 3,
      userInput: "Allergic Bronchopulmonary Aspergillosis (ABPA)",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 4,
      questionAnswerId: 3,
      userInput: "Allergic Bronchopulmonary Aspergillosis (ABPA)",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 5,
      questionAnswerId: 3,
      userInput: "Allergic Bronchopulmonary Aspergillosis (ABPA)",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 6,
      questionAnswerId: 3,
      userInput: "Allergic Bronchopulmonary Aspergillosis (ABPA)",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 7,
      questionAnswerId: 3,
      userInput: "Allergic Bronchopulmonary Aspergillosis (ABPA)",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 8,
      questionAnswerId: 3,
      userInput: "Allergic Bronchopulmonary Aspergillosis (ABPA)",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 9,
      questionAnswerId: 3,
      userInput: "Allergic Bronchopulmonary Aspergillosis (ABPA)",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 10,
      questionAnswerId: 3,
      userInput: "Allergic Bronchopulmonary Aspergillosis (ABPA)",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),

    //Question#4
    User_Question.create({
      userId: 1,
      questionAnswerId: 4,
      userInput: "M. Tuberculosis",
      answered: "right",
      userExpertise: "Student",
      level: "Easy",
    }),
    User_Question.create({
      userId: 2,
      questionAnswerId: 4,
      userInput: "M. Tuberculosis",
      answered: "right",
      userExpertise: "Student",
      level: "Easy",
    }),
    User_Question.create({
      userId: 3,
      questionAnswerId: 4,
      userInput: "M. Tuberculosis",
      answered: "right",
      userExpertise: "Student",
      level: "Easy",
    }),
    User_Question.create({
      userId: 4,
      questionAnswerId: 4,
      userInput: "M. Tuberculosis",
      answered: "right",
      userExpertise: "Student",
      level: "Easy",
    }),
    User_Question.create({
      userId: 5,
      questionAnswerId: 4,
      userInput: "M. Tuberculosis",
      answered: "right",
      userExpertise: "Student",
      level: "Easy",
    }),
    User_Question.create({
      userId: 6,
      questionAnswerId: 4,
      userInput: "M. Tuberculosis",
      answered: "right",
      userExpertise: "Student",
      level: "Easy",
    }),
    User_Question.create({
      userId: 7,
      questionAnswerId: 4,
      userInput: "M. Tuberculosis",
      answered: "right",
      userExpertise: "Student",
      level: "Easy",
    }),
    User_Question.create({
      userId: 8,
      questionAnswerId: 4,
      userInput: "M. Tuberculosis",
      answered: "right",
      userExpertise: "Student",
      level: "Easy",
    }),
    User_Question.create({
      userId: 9,
      questionAnswerId: 4,
      userInput: "M. Tuberculosis",
      answered: "right",
      userExpertise: "Student",
      level: "Easy",
    }),
    User_Question.create({
      userId: 10,
      questionAnswerId: 4,
      userInput: "M. Tuberculosis",
      answered: "right",
      userExpertise: "Student",
      level: "Easy",
    }),

    //Question#5

    User_Question.create({
      userId: 1,
      questionAnswerId: 5,
      userInput: "Germ cell origin",
      answered: "wrong",
      userExpertise: "Student",
      level: "Hard",
    }),
    User_Question.create({
      userId: 2,
      questionAnswerId: 5,
      userInput: "Germ cell origin",
      answered: "wrong",
      userExpertise: "Student",
      level: "Hard",
    }),
    User_Question.create({
      userId: 3,
      questionAnswerId: 5,
      userInput: "Germ cell origin",
      answered: "wrong",
      userExpertise: "Student",
      level: "Hard",
    }),
    User_Question.create({
      userId: 4,
      questionAnswerId: 5,
      userInput: "Lymphoid origin",
      answered: "wrong",
      userExpertise: "Student",
      level: "Hard",
    }),
    User_Question.create({
      userId: 5,
      questionAnswerId: 5,
      userInput: "Lymphoid origin",
      answered: "wrong",
      userExpertise: "Student",
      level: "Hard",
    }),
    User_Question.create({
      userId: 6,
      questionAnswerId: 5,
      userInput: "Lymphoid origin",
      answered: "wrong",
      userExpertise: "Student",
      level: "Hard",
    }),
    User_Question.create({
      userId: 7,
      questionAnswerId: 5,
      userInput: "Metastatic origin",
      answered: "wrong",
      userExpertise: "Student",
      level: "Hard",
    }),
    User_Question.create({
      userId: 8,
      questionAnswerId: 5,
      userInput: "Metastatic origin",
      answered: "wrong",
      userExpertise: "Student",
      level: "Hard",
    }),
    User_Question.create({
      userId: 9,
      questionAnswerId: 5,
      userInput: "Metastatic origin",
      answered: "wrong",
      userExpertise: "Student",
      level: "Hard",
    }),
    User_Question.create({
      userId: 10,
      questionAnswerId: 5,
      userInput: "Metastatic origin",
      answered: "wrong",
      userExpertise: "Student",
      level: "Hard",
    }),

    //Quesion#6
    User_Question.create({
      userId: 1,
      questionAnswerId: 6,
      userInput: "Anti-CCP antibodies",
      answered: "wrong",
      userExpertise: "Student",
      level: "Hard",
    }),
    User_Question.create({
      userId: 2,
      questionAnswerId: 6,
      userInput: "Anti-CCP antibodies",
      answered: "wrong",
      userExpertise: "Student",
      level: "Hard",
    }),
    User_Question.create({
      userId: 3,
      questionAnswerId: 6,
      userInput: "Anti-CCP antibodies",
      answered: "wrong",
      userExpertise: "Student",
      level: "Hard",
    }),
    User_Question.create({
      userId: 4,
      questionAnswerId: 6,
      userInput: "Anti-CCP antibodies",
      answered: "wrong",
      userExpertise: "Student",
      level: "Hard",
    }),
    User_Question.create({
      userId: 5,
      questionAnswerId: 6,
      userInput: "Anti-CCP antibodies",
      answered: "wrong",
      userExpertise: "Student",
      level: "Hard",
    }),
    User_Question.create({
      userId: 6,
      questionAnswerId: 6,
      userInput: "Anti-CCP antibodies",
      answered: "wrong",
      userExpertise: "Student",
      level: "Hard",
    }),
    User_Question.create({
      userId: 7,
      questionAnswerId: 6,
      userInput: "Antibodies against Post Acetylcholine receptors",
      answered: "right",
      userExpertise: "Student",
      level: "Hard",
    }),
    User_Question.create({
      userId: 8,
      questionAnswerId: 6,
      userInput: "Antibodies against Post Acetylcholine receptors",
      answered: "right",
      userExpertise: "Student",
      level: "Hard",
    }),
    User_Question.create({
      userId: 9,
      questionAnswerId: 6,
      userInput: "Antibodies against Post Acetylcholine receptors",
      answered: "right",
      userExpertise: "Student",
      level: "Hard",
    }),
    User_Question.create({
      userId: 10,
      questionAnswerId: 6,
      userInput: "Antibodies against Post Acetylcholine receptors",
      answered: "right",
      userExpertise: "Student",
      level: "Hard",
    }),

    //Question#7
    User_Question.create({
      userId: 1,
      questionAnswerId: 7,
      userInput: "Ambrisentan",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 2,
      questionAnswerId: 7,
      userInput: "Ambrisentan",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 3,
      questionAnswerId: 7,
      userInput: "Ambrisentan",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 4,
      questionAnswerId: 7,
      userInput: "Ambrisentan",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 5,
      questionAnswerId: 7,
      userInput: "Riociguat",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 6,
      questionAnswerId: 7,
      userInput: "Riociguat",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 7,
      questionAnswerId: 7,
      userInput: "Riociguat",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 8,
      questionAnswerId: 7,
      userInput: "Riociguat",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 9,
      questionAnswerId: 7,
      userInput: "Riociguat",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 10,
      questionAnswerId: 7,
      userInput: "Riociguat",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),

    //Question#8
    User_Question.create({
      userId: 1,
      questionAnswerId: 8,
      userInput: "The disease affects men much more often than women.",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 2,
      questionAnswerId: 8,
      userInput: "The disease affects men much more often than women.",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 3,
      questionAnswerId: 8,
      userInput: "The disease affects men much more often than women.",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 4,
      questionAnswerId: 8,
      userInput:
        "RHC is required during diagnostic evaluation when pulmonary hypertension is suspected.",
      userInput:
        "RHC is required during diagnostic evaluation when pulmonary hypertension is suspected.",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 5,
      questionAnswerId: 8,
      userInput:
        "RHC is required during diagnostic evaluation when pulmonary hypertension is suspected.",
      userInput:
        "RHC is required during diagnostic evaluation when pulmonary hypertension is suspected.",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 6,
      questionAnswerId: 8,
      userInput:
        "RHC is required during diagnostic evaluation when pulmonary hypertension is suspected.",
      userInput:
        "RHC is required during diagnostic evaluation when pulmonary hypertension is suspected.",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 7,
      questionAnswerId: 8,
      userInput:
        "RHC is required during diagnostic evaluation when pulmonary hypertension is suspected.",
      userInput:
        "RHC is required during diagnostic evaluation when pulmonary hypertension is suspected.",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 8,
      questionAnswerId: 8,
      userInput:
        "RHC is required during diagnostic evaluation when pulmonary hypertension is suspected.",
      userInput:
        "RHC is required during diagnostic evaluation when pulmonary hypertension is suspected.",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 9,
      questionAnswerId: 8,
      userInput:
        "RHC is required during diagnostic evaluation when pulmonary hypertension is suspected.",
      userInput:
        "RHC is required during diagnostic evaluation when pulmonary hypertension is suspected.",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 10,
      questionAnswerId: 8,
      userInput:
        "RHC is required during diagnostic evaluation when pulmonary hypertension is suspected.",
      userInput:
        "RHC is required during diagnostic evaluation when pulmonary hypertension is suspected.",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),

    //Question#9
    User_Question.create({
      userId: 1,
      questionAnswerId: 9,
      userInput: "6-minute walk test",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 2,
      questionAnswerId: 9,
      userInput: "6-minute walk test",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 3,
      questionAnswerId: 9,
      userInput: "6-minute walk test",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 4,
      questionAnswerId: 9,
      userInput: "6-minute walk test",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 5,
      questionAnswerId: 9,
      userInput: "6-minute walk test",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 6,
      questionAnswerId: 9,
      userInput: "6-minute walk test",
      answered: "wrong",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 7,
      questionAnswerId: 9,
      userInput: "Ventilation/Perfusion scan",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 8,
      questionAnswerId: 9,
      userInput: "Ventilation/Perfusion scan",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 9,
      questionAnswerId: 9,
      userInput: "Ventilation/Perfusion scan",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 10,
      questionAnswerId: 9,
      userInput: "Ventilation/Perfusion scan",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),

    //Question#10

    User_Question.create({
      userId: 1,
      questionAnswerId: 10,
      userInput: "Start IV fluids",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 2,
      questionAnswerId: 10,
      userInput: "Start IV fluids",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 3,
      questionAnswerId: 10,
      userInput: "Start IV fluids",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 4,
      questionAnswerId: 10,
      userInput: "Start IV fluids",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 5,
      questionAnswerId: 10,
      userInput: "Start IV fluids",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 6,
      questionAnswerId: 10,
      userInput: "Start IV fluids",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 7,
      questionAnswerId: 10,
      userInput: "Start IV fluids",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 8,
      questionAnswerId: 10,
      userInput: "Start IV fluids",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 9,
      questionAnswerId: 10,
      userInput: "Start IV fluids",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),
    User_Question.create({
      userId: 10,
      questionAnswerId: 10,
      userInput: "Start IV fluids",
      answered: "right",
      userExpertise: "Student",
      level: "Moderate",
    }),

    // User_Question.create({
    //   userId: 1,
    //   questionAnswerId: 2,
    //   favorite: true,
    //   userInput: `D-Dimer test is positive and indicates immediate treatment of PE.`,
    //   answered: "wrong",
    //   showExplanation: true,
    // }),
    // User_Question.create({
    //   userId: 1,
    //   questionAnswerId: 2,
    //   favorite: true,
    //   userInput: "A",
    //   answered: "right",
    // }),
    // User_Question.create({
    //   userId: 1,
    //   questionAnswerId: 3,
    //   favorite: true,
    //   answered: "none",
    // }),
    // User_Question.create({
    //   userId: 1,
    //   questionAnswerId: 4,
    //   favorite: true,
    //   answered: "none",
    // }),
  ]);

  console.log(
    `seeded ${users.length} users, ${user_question.length} User input data, and ${Question.length} question(s).`
  );
  console.log(`seeded successfully`);
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;

//   //Qx
//   Question_Answer.create({
//     question: ``,
//     questionImage: [],
//     answerOptions: [``,``,``,``],
//     questionImage: [],
//     correctAnswer:``,
//     explanation: ``,
//     explanationImage: [],
//     explanationLinks: [
//         `<a href="" target="_blank"></a>`,
//      ],
//     level: "Easy",
//     category: ""Pulmonary Function"",
//   }),
