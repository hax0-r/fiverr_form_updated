


// ====Show Hide Logics===================

// Is Redeck needed?

const IsRedeckneededYes = document.getElementById("IsRedeckneededYes")
const IsRedeckneededNo = document.getElementById("IsRedeckneededNo")
const IfyestypeorRedeckisneededs = document.getElementById("IfyestypeorRedeckisneededs")

IsRedeckneededYes.addEventListener('change', function () {
    if (IsRedeckneededYes.checked) {
        IfyestypeorRedeckisneededs.style.display = 'block';
    }
});
IsRedeckneededNo.addEventListener('change', function () {
    if (IsRedeckneededNo.checked) {
        IfyestypeorRedeckisneededs.style.display = 'none';
    }
});


// Is there a low slope component on the roof?

const lowSlopeYes = document.getElementById("lowSlopeYes")
const lowSlopeNo = document.getElementById("lowSlopeNo")
const IfYesmodifiedbitumenpresents = document.getElementById("IfYesmodifiedbitumenpresents")

lowSlopeYes.addEventListener('change', function () {
    if (lowSlopeYes.checked) {
        IfYesmodifiedbitumenpresents.style.display = 'block';
    }
});
lowSlopeNo.addEventListener('change', function () {
    if (lowSlopeNo.checked) {
        IfYesmodifiedbitumenpresents.style.display = 'none';
    }
});

// Metal roof

const metalRoofs = document.getElementById("metalRoofs")
const metalRoofYes = document.getElementById("metalRoofYes")
const metalRoofNo = document.getElementById("metalRoofNo")

metalRoofNo.addEventListener('change', function () {
    if (metalRoofNo.checked) {
        metalRoofs.style.display = 'none';
    }
});
metalRoofYes.addEventListener('change', function () {
    if (metalRoofYes.checked) {
        metalRoofs.style.display = 'block';
    }
});

// Add gutters to Scope of Work?

const AddgutterstoScopeofWork = document.getElementById("AddgutterstoScopeofWork");
const AddgutterstoScopeofWorks = document.getElementById("AddgutterstoScopeofWorks");

AddgutterstoScopeofWork.addEventListener('change', function () {
    if (AddgutterstoScopeofWork.value === 'Yes') {
        AddgutterstoScopeofWorks.style.display = 'block';
    } else {
        AddgutterstoScopeofWorks.style.display = 'none';
    }
});


// solar =============

const Isthereasolarontheroof = document.getElementById("Isthereasolarontheroof");
const solarPanelsId = document.getElementById("solarPanelsId");

Isthereasolarontheroof.addEventListener('change', function () {
    if (Isthereasolarontheroof.value === 'Yes') {
        solarPanelsId.style.display = 'block';
    } else {
        solarPanelsId.style.display = 'none';
    }
});

// ==== basic sliding details

const SelectReplacement = document.getElementById("SelectReplacement");
const materialSubId = document.getElementById("materialSubId");
const FullHouseReplacment = document.getElementById("FullHouseReplacment");
const PartialReplacement = document.getElementById("PartialReplacement");
const SmallRepairs = document.getElementById("SmallRepairs");

SelectReplacement.addEventListener('change', function () {
    if (SelectReplacement.value === 'Full House Replacment?' || SelectReplacement.value === 'Partial Replacement' || SelectReplacement.value === 'Small Repairs') {
        materialSubId.style.display = 'block';
    } else {
        materialSubId.style.display = 'none';
    }

    if (SelectReplacement.value === 'Full House Replacment?') {
        FullHouseReplacment.parentElement.parentElement.style.display = 'block';
        PartialReplacement.parentElement.parentElement.style.display = 'none';
        SmallRepairs.parentElement.parentElement.style.display = 'none';
    } else if (SelectReplacement.value === 'Partial Replacement') {
        FullHouseReplacment.parentElement.parentElement.style.display = 'none';
        PartialReplacement.parentElement.parentElement.style.display = 'block';
        SmallRepairs.parentElement.parentElement.style.display = 'none';
    } else if (SelectReplacement.value === 'Small Repairs') {
        FullHouseReplacment.parentElement.parentElement.style.display = 'none';
        PartialReplacement.parentElement.parentElement.style.display = 'none';
        SmallRepairs.parentElement.parentElement.style.display = 'block';
    }
});

SelectReplacement.dispatchEvent(new Event('change'));

// Siding Material Type=========

const StyleofMaterial = document.getElementById("StyleofMaterial");
const sidingMaterialSubId = document.getElementById("sidingMaterialSubId");

const vinylSection = document.getElementById("Vinyl").parentElement.parentElement;
const cementFiberSection = document.getElementById("CementFiber").parentElement.parentElement;
const metalSection = document.getElementById("Metales").parentElement.parentElement;
const cementFiberWoodPaintingSection = document.getElementById("CementFiberWoodPainting").parentElement.parentElement;
const woodStainingSection = document.getElementById("WoodStaining").parentElement.parentElement;

StyleofMaterial.addEventListener('change', function() {
    sidingMaterialSubId.style.display = 'block';

    vinylSection.style.display = 'none';
    cementFiberSection.style.display = 'none';
    metalSection.style.display = 'none';
    cementFiberWoodPaintingSection.style.display = 'none';
    woodStainingSection.style.display = 'none';

    if (StyleofMaterial.value === 'Vinyl') {
        vinylSection.style.display = 'block';
    } else if (StyleofMaterial.value === 'Cement Fiber') {
        cementFiberSection.style.display = 'block';
        cementFiberWoodPaintingSection.style.display = 'block';
    } else if (StyleofMaterial.value === 'Wood') {
        cementFiberWoodPaintingSection.style.display = 'block';
        woodStainingSection.style.display = 'block';
    } else if (StyleofMaterial.value === 'Metal') {
        metalSection.style.display = 'block';
    }
});

StyleofMaterial.dispatchEvent(new Event('change'));


// Fascia Replacement=====================

document.addEventListener('DOMContentLoaded', function() {
    const replacementSelect = document.getElementById('replacementSelect');
    const fullHouseReplacementSection = document.getElementById('fullHouseReplacementSection');
    const partialReplacementSection = document.getElementById('partialReplacementSection');
    const smallRepairsSection = document.getElementById('smallRepairsSection');

    replacementSelect.addEventListener('change', function() {
        fullHouseReplacementSection.style.display = 'none';
        partialReplacementSection.style.display = 'none';
        smallRepairsSection.style.display = 'none';

        if (this.value === 'Full House Replacement') {
            fullHouseReplacementSection.style.display = 'block';
        } else if (this.value === 'Partial Replacement') {
            partialReplacementSection.style.display = 'block';
        } else if (this.value === 'Small Repairs') {
            smallRepairsSection.style.display = 'block';
        }
    });
});



// ===========Soffit Replacement


document.addEventListener('DOMContentLoaded', function() {
    const soffitReplacementSelect = document.getElementById('soffitReplacementSelect');
    const soffitFullHouseReplacementSection = document.getElementById('soffitFullHouseReplacementSection');
    const soffitPartialReplacementSection = document.getElementById('soffitPartialReplacementSection');
    const soffitSmallRepairsSection = document.getElementById('soffitSmallRepairsSection');

    soffitReplacementSelect.addEventListener('change', function() {
        // Hide all sections initially
        soffitFullHouseReplacementSection.style.display = 'none';
        soffitPartialReplacementSection.style.display = 'none';
        soffitSmallRepairsSection.style.display = 'none';

        // Show the relevant section based on the selected value
        if (this.value === 'Full House Replacement') {
            soffitFullHouseReplacementSection.style.display = 'block';
        } else if (this.value === 'Partial Replacement') {
            soffitPartialReplacementSection.style.display = 'block';
        } else if (this.value === 'Small Repairs') {
            soffitSmallRepairsSection.style.display = 'block';
        }
    });
});

// Behind the Siding Details=================


document.addEventListener('DOMContentLoaded', function() {
    const behindSidingSelect = document.getElementById('behindSidingSelect');
    const behindSidingFullHouseReplacementSection = document.getElementById('behindSidingFullHouseReplacementSection');
    const behindSidingPartialReplacementSection = document.getElementById('behindSidingPartialReplacementSection');
    const behindSidingSmallRepairsSection = document.getElementById('behindSidingSmallRepairsSection');

    behindSidingSelect.addEventListener('change', function() {
        // Hide all sections initially
        behindSidingFullHouseReplacementSection.style.display = 'none';
        behindSidingPartialReplacementSection.style.display = 'none';
        behindSidingSmallRepairsSection.style.display = 'none';

        // Show the relevant section based on the selected value
        if (this.value === 'Full House Replacement') {
            behindSidingFullHouseReplacementSection.style.display = 'block';
        } else if (this.value === 'Partial Replacement') {
            behindSidingPartialReplacementSection.style.display = 'block';
        } else if (this.value === 'Small Repairs') {
            behindSidingSmallRepairsSection.style.display = 'block';
        }
    });
});



// =======================










document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();


    // Function to convert "Open this select menu" to "Not selected"
    function convertSelectMenuOption(options) {
        return options.map(option => option === "Open this select menu" ? "Not Selected" : option);
    }

    // Capture basic form data
    const HomeownerName = document.getElementById('HomeownerName').value;
    const HomeownerAddress = document.getElementById('HomeownerAddress').value;
    const companyname = document.getElementById('companyname').value;

    // Capture radio button selection for photo submission
    let photoSubmission = '';
    const photoSubmissionRadios = document.getElementsByName('photoSubmission');
    photoSubmissionRadios.forEach(radio => {
        if (radio.checked) {
            photoSubmission = radio.value;
        }
    });

    // Capture selected options for multiple selects
    const TypeofClaim = convertSelectMenuOption(Array.from(document.getElementById('TypeofClaim').selectedOptions).map(option => option.value));
    const Tradestobeproducedbythecontractor = convertSelectMenuOption(
        Array.from(document.getElementById('Tradestobeproducedbythecontractor').selectedOptions).map(option => option.value)
    );

    const Structure = convertSelectMenuOption(
        Array.from(document.getElementById('Structure').selectedOptions).map(option => option.value)
    );

    const CurrentStatewithInsurance = convertSelectMenuOption(
        Array.from(document.getElementById('CurrentStatewithInsurance').selectedOptions).map(option => option.value)
    );

    const Doyouhaveameasurementreport = convertSelectMenuOption(
        Array.from(document.getElementById('Doyouhaveameasurementreport').selectedOptions).map(option => option.value)
    );

    const StageofClaim = convertSelectMenuOption(
        Array.from(document.getElementById('StageofClaim').selectedOptions).map(option => option.value)
    );

    const Anyadditionalnotesfortheclaim = document.getElementById('Anyadditionalnotesfortheclaim').value;
    const InsuranceCompany = document.getElementById('InsuranceCompany').value;
    const ClaimNumber = document.getElementById('ClaimNumber').value;

    const SelectReplacement = convertSelectMenuOption(
        Array.from(document.getElementById('SelectReplacement').selectedOptions).map(option => option.value)
    );

    const FullHouseReplacment = convertSelectMenuOption(
        Array.from(document.getElementById('FullHouseReplacment').selectedOptions).map(option => option.value)
    );

    const PartialReplacement = convertSelectMenuOption(
        Array.from(document.getElementById('PartialReplacement').selectedOptions).map(option => option.value)
    );

    const SmallRepairs = document.getElementById('SmallRepairs').value;

    const Whatisthecurrentroofingmaterial = convertSelectMenuOption(
        Array.from(document.getElementById('Whatisthecurrentroofingmaterial').selectedOptions).map(option => option.value)
    );

    const Whatareyouinstallingontheroof = convertSelectMenuOption(
        Array.from(document.getElementById('Whatareyouinstallingontheroof').selectedOptions).map(option => option.value)
    );

    // Capture radio button selections
    let IfnotrequiredbycodesaddIceandwatershieldtoScopeofWork = '';
    const IfnotrequiredbycodesaddIceandwatershieldtoScopeofWorkRadios = document.getElementsByName('IfnotrequiredbycodesaddIceandwatershieldtoScopeofWork');
    IfnotrequiredbycodesaddIceandwatershieldtoScopeofWorkRadios.forEach(radio => {
        if (radio.checked) {
            IfnotrequiredbycodesaddIceandwatershieldtoScopeofWork = radio.value;
        }
    });

    let IfnotrequiredbycodesadddripedgetoScopeofWork = '';
    const IfnotrequiredbycodesadddripedgetoScopeofWorkRadios = document.getElementsByName('IfnotrequiredbycodesadddripedgetoScopeofWork');
    IfnotrequiredbycodesadddripedgetoScopeofWorkRadios.forEach(radio => {
        if (radio.checked) {
            IfnotrequiredbycodesadddripedgetoScopeofWork = radio.value;
        }
    });

    let ShouldthisbewrittentoFORTIFIEDstandards = '';
    const ShouldthisbewrittentoFORTIFIEDstandardsRadios = document.getElementsByName('ShouldthisbewrittentoFORTIFIEDstandards');
    ShouldthisbewrittentoFORTIFIEDstandardsRadios.forEach(radio => {
        if (radio.checked) {
            ShouldthisbewrittentoFORTIFIEDstandards = radio.value;
        }
    });

    let IsRedeckneeded = '';
    const IsRedeckneededRadios = document.getElementsByName('IsRedeckneeded');
    IsRedeckneededRadios.forEach(radio => {
        if (radio.checked) {
            IsRedeckneeded = radio.value;
        }
    });

    let roofDetails = '';
    const roofDetailsRadios = document.getElementsByName('IsRedeckneeded');
    roofDetailsRadios.forEach(radio => {
        if (radio.checked) {
            roofDetails = radio.value;
        }
    });

    const IfyestypeorRedeckisneeded = convertSelectMenuOption(
        Array.from(document.getElementById('IfyestypeorRedeckisneeded').selectedOptions).map(option => option.value)
    );

    // Capture venting data from checkboxes and corresponding inputs
    const ventingData = [];
    const ventingTypes = ['ridgeVent', 'boxVent', 'gableVent', 'tradPowerVent', 'solarPowerVent', 'others'];
    ventingTypes.forEach(type => {
        const checkbox = document.getElementById(`${type}Checkbox`);
        const input = document.getElementById(`${type}Input`);
        if (checkbox && checkbox.checked) {
            ventingData.push({ type: checkbox.nextElementSibling.textContent.trim(), value: input.value });
        }
    });

    const typeVenting = [];
    const typeVentingOptions = [
        'LeadPipeBoot', 'RubberPipeBoot', 'SplitBoot',
        'Chimney', 'SkylightFlashingOnly', 'SkylightFullReplacement'
    ];

    typeVentingOptions.forEach(type => {
        const checkbox = document.getElementById(`${type}Checkbox`);
        const input = document.getElementById(`${type}Input`);
        if (checkbox && checkbox.checked) {
            typeVenting.push({ type: checkbox.nextElementSibling.textContent.trim(), value: input.value });
        }
    });

    const detachAndReset = [];
    const detachAndResetOptions = [
        'Shutters', 'ExteriorLightFixtures', 'ExteriorOutletsSwitches',
        'ExteriorFaucetsHoseBibb', 'ClothesDryerVentCovers', 'LowVoltageBoxes',
        'MeterBaseMainDisconnect'
    ];

    detachAndResetOptions.forEach(type => {
        const checkbox = document.getElementById(`${type}Checkbox`);
        const input = document.getElementById(`${type}Input`);
        if (checkbox && checkbox.checked) {
            detachAndReset.push({ type: checkbox.nextElementSibling.textContent.trim(), value: input.value });
        }
    });

    const additionalLayers = [];
    const additionalLayersOptions = [
        'ShingleLayers', 'FeltUnderlaymentLayers', 'WoodShakeShingleLayers'
    ];

    additionalLayersOptions.forEach(type => {
        const checkbox = document.getElementById(`${type}Checkbox`);
        const input = document.getElementById(`${type}Input`);
        if (checkbox && checkbox.checked) {
            additionalLayers.push({ type: checkbox.nextElementSibling.textContent.trim(), value: input.value });
        }
    });



    const AddgutterstoScopeofWork = convertSelectMenuOption(
        Array.from(document.getElementById('AddgutterstoScopeofWork').selectedOptions).map(option => option.value)
    );

    const IfyesWhattypeofguttersarecurrentlyonthehouse = convertSelectMenuOption(
        Array.from(document.getElementById('IfyesWhattypeofguttersarecurrentlyonthehouse').selectedOptions).map(option => option.value)
    );

    const Whatisthesizeofgutters = convertSelectMenuOption(
        Array.from(document.getElementById('Whatisthesizeofgutters').selectedOptions).map(option => option.value)
    );

    const Whatisthesizeofthedownspouts = convertSelectMenuOption(
        Array.from(document.getElementById('Whatisthesizeofthedownspouts').selectedOptions).map(option => option.value)
    );

    const linearfeetofthegutters = document.getElementById('linearfeetofthegutters').value;
    const linearfeetofthedownspouts = document.getElementById('linearfeetofthedownspouts').value;
    const Howmanyguardscurrentlyhouse = document.getElementById('Howmanyguardscurrentlyhouse').value;

    const Areadditionalinstalledgutters = convertSelectMenuOption(
        Array.from(document.getElementById('Areadditionalinstalledgutters').selectedOptions).map(option => option.value)
    );


    const additionalaccessoriesinstalled = document.getElementById('additionalaccessoriesinstalled').value;



    const Isthereasolarontheroof = convertSelectMenuOption(
        Array.from(document.getElementById('Isthereasolarontheroof').selectedOptions).map(option => option.value)
    );

    const Ifyessolarpaneldetachedreset = convertSelectMenuOption(
        Array.from(document.getElementById('Ifyessolarpaneldetachedreset').selectedOptions).map(option => option.value)
    );


    const Howmanyolarpanelsarepresent = document.getElementById('Howmanyolarpanelsarepresent').value;
    const Howmanymountsarepresent = document.getElementById('Howmanymountsarepresent').value;

    let lowSlopeComponent = '';
    const lowSlopeRadios = document.getElementsByName('lowSlopeComponent');
    lowSlopeRadios.forEach(radio => {
        if (radio.checked) {
            lowSlopeComponent = radio.value;
        }
    });


    const IfYesmodifiedbitumenpresent = convertSelectMenuOption(
        Array.from(document.getElementById('IfYesmodifiedbitumenpresent').selectedOptions).map(option => option.value)
    );


    let metalRoofPresent = '';
    const metalRoofRadios = document.getElementsByName('metalRoofPresent');
    metalRoofRadios.forEach(radio => {
        if (radio.checked) {
            metalRoofPresent = radio.value;
        }
    });


    const Whattypemetalroofpresent = convertSelectMenuOption(
        Array.from(document.getElementById('Whattypemetalroofpresent').selectedOptions).map(option => option.value)
    );

    const Whatgaugeofmetal = convertSelectMenuOption(
        Array.from(document.getElementById('Whatgaugeofmetal').selectedOptions).map(option => option.value)
    );

    const Whattypeoffinisharepresent = convertSelectMenuOption(
        Array.from(document.getElementById('Whattypeoffinisharepresent').selectedOptions).map(option => option.value)
    );

    const Includetrimmetal = convertSelectMenuOption(
        Array.from(document.getElementById('Includetrimmetal').selectedOptions).map(option => option.value)
    );

    const underlaymentrequiredwhichtype = convertSelectMenuOption(
        Array.from(document.getElementById('underlaymentrequiredwhichtype').selectedOptions).map(option => option.value)
    );

    const StyleofMaterial = convertSelectMenuOption(
        Array.from(document.getElementById('StyleofMaterial').selectedOptions).map(option => option.value)
    );

    const Vinyl = convertSelectMenuOption(
        Array.from(document.getElementById('Vinyl').selectedOptions).map(option => option.value)
    );

    const CementFiber = convertSelectMenuOption(
        Array.from(document.getElementById('CementFiber').selectedOptions).map(option => option.value)
    );

    const Metales = convertSelectMenuOption(
        Array.from(document.getElementById('Metales').selectedOptions).map(option => option.value)
    );

    const CementFiberWoodPainting = convertSelectMenuOption(
        Array.from(document.getElementById('CementFiberWoodPainting').selectedOptions).map(option => option.value)
    );

    const WoodStaining = convertSelectMenuOption(
        Array.from(document.getElementById('WoodStaining').selectedOptions).map(option => option.value)
    );

    const WallInsulation = convertSelectMenuOption(
        Array.from(document.getElementById('WallInsulation').selectedOptions).map(option => option.value)
    );

    const WallSheathing = convertSelectMenuOption(
        Array.from(document.getElementById('WallSheathing').selectedOptions).map(option => option.value)
    );


    // API details for Airtable
    const accessToken = 'patD4MoF0RVg8hx2u.09a9b94470e4cebe53823dc1b5ccf46982b0808328ef55ff09e695e107be83dd';
    const baseId = 'app9FKFRb2mse21SQ';
    const tableId = 'tbltt4o5XFQCoJmFu';

    // Fields to be submitted to Airtable
    const fields = {
        'Homeowner Name': HomeownerName,
        'Homeowner Address': HomeownerAddress,
        'Company Name': companyname,
        'Photos submitted': photoSubmission,
        'Type of Claim': TypeofClaim,
        'Trades to be produced by the contractor': Tradestobeproducedbythecontractor,
        'Structure': Structure,
        'Current State with Insurance': CurrentStatewithInsurance,
        'Do you have a measurement report': Doyouhaveameasurementreport,
        'Stage of Claim': StageofClaim,
        'Any additional notes for the claim': Anyadditionalnotesfortheclaim,
        'Insurance Company': InsuranceCompany,
        'Claim Number': ClaimNumber,
        'Select Replacement': SelectReplacement,
        'Full House Replacment': FullHouseReplacment,
        'Partial Replacement': PartialReplacement,
        'Small Repairs': SmallRepairs,
        'What is the current roofing material': Whatisthecurrentroofingmaterial,
        'What are you installing on the roof': Whatareyouinstallingontheroof,
        'If not required by codes, add Ice and water shield to Scope of Work': IfnotrequiredbycodesaddIceandwatershieldtoScopeofWork,
        'If not required by codes, add drip edge to Scope of Work': IfnotrequiredbycodesadddripedgetoScopeofWork,
        'Should this be written to FORTIFIED standards': ShouldthisbewrittentoFORTIFIEDstandards,
        'Is Redeck needed': IsRedeckneeded,
        'If yes, type or Redeck is needed': IfyestypeorRedeckisneeded,
        'What type of venting is currently on the roof': JSON.stringify(ventingData),
        'How many roof penetrations are present': JSON.stringify(typeVenting),
        'Detach and Reset': JSON.stringify(detachAndReset),
        'Are there any other additional layers of removal': JSON.stringify(additionalLayers),
        'What material is in the Valleys': roofDetails,
        'Add gutters to Scope of Work': AddgutterstoScopeofWork,
        'If yes, What type of gutters are currently on the house': IfyesWhattypeofguttersarecurrentlyonthehouse,
        'What is the size of gutters': Whatisthesizeofgutters,
        'What is the size of the downspouts': Whatisthesizeofthedownspouts,
        'linear feet of the gutters': linearfeetofthegutters,
        'linear feet of the downspouts': linearfeetofthedownspouts,
        'How many splash guards are currently on the house': Howmanyguardscurrentlyhouse,
        'Are there additional accessories installed on the gutters': Areadditionalinstalledgutters,
        'additional accessories installed': additionalaccessoriesinstalled,
        'Is there a solar on the roof': Isthereasolarontheroof,
        'If yes, Should solar panel be detached and reset': Ifyessolarpaneldetachedreset,
        'How many solar panels are present': Howmanyolarpanelsarepresent,
        'How many mounts are present': Howmanymountsarepresent,
        'Is there a low slope component on the roof': lowSlopeComponent,
        'If Yes, Is modified bitumen present': IfYesmodifiedbitumenpresent,
        'Is there a metal roof present': metalRoofPresent,
        'What type of metal roof is present': Whattypemetalroofpresent,
        'What gauge of metal': Whatgaugeofmetal,
        'What type of finish are present': Whattypeoffinisharepresent,
        'Include trim metal': Includetrimmetal,
        'If underlayment is required, which type': underlaymentrequiredwhichtype,
        'Style of Material': StyleofMaterial,
        'Vinyl': Vinyl,
        'Cement Fiber': CementFiber,
        'Metal': Metales,
        'Cement FiberWood Painting': CementFiberWoodPainting,
        'Wood Staining': WoodStaining,
        'Wall Insulation': WallInsulation,
        'Wall Sheathing': WallSheathing,
    };

    // Debugging log for submitted fields
    console.log('Submitting fields:', fields);

    // Submit data to Airtable via fetch API
    fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fields: fields })
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(error => { throw new Error(JSON.stringify(error)) });
            }
            return response.json();
        })
        .then(data => {
            console.log('Airtable response:', data);
            // Redirect to thank you page or show success message
            window.location.href = 'thankyou.html';
        })
        .catch(error => {
            console.error('Error:', error);

            // window.location.href = 'nosubmission.html';
        });
});
