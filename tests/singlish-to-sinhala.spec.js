const { test, expect } = require('@playwright/test');

// 1st Test Case
test('Pos_Fun_0001 - Convert a short daily language usage', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('mama kaeema uyanavaa.');

    // Fix: pick the first matching element
    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('මම කෑම උයනවා');
});

// 2nd Test Case
test('Pos_Fun_0002 - Convert the compound sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('mama kadeeta gihin ena gaman mada valakata vaetuNaa.');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('මම කඩේට ගිහින් එන ගමන් මඩ වලකට වැටුණා');
});

// 3rd Test Case
test('Pos_Fun_0003 - Convert complex conditional sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('oyaa mata mal dhenavaa nam mama godak kaemathiyi.');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('ඔයා මට මල් දෙනවා නම් මම ගොඩක් කැමතියි');
});

// 4th Test Case
test('Pos_Fun_0004 - Convert an interrogative (question) sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('oyaa asaniipendha?');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();

    // Wait up to 10 seconds for the text to appear
    await expect(outputBox).toContainText('ඔයා අසනීපෙන්ද?', { timeout: 10000 });
});


// 5th Test Case
test('Pos_Fun_0005 - Convert Imperative (command)', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('semin Dhaavanaya karanna.');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('සෙමින් ධාවනය කරන්න');
});

// 6th Test Case
test('Pos_Fun_0006 - Convert a polite request', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('oyaa mukuth hithanne naethnam mama methanin vaadivennadha?');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('ඔයා මුකුත් හිතන්නෙ නැත්නම් මම මෙතනින් වාඩිවෙන්නද?');
});

// 7th Test Case
test('Pos_Fun_0007 - Convert the greeting phrase', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('dhiirGhaayuSha laebeevaa!');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('දීර්ඝායුෂ ලැබේවා!');
});

// 8th Test Case
test('Pos_Fun_0008 - Convert an informal request', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('ikmanata varen baQQ.');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('ඉක්මනට වරෙන් බං.');
});

// 9th Test Case
test('Pos_Fun_0009 - Convert a Negative sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('api adha oru padhinna yannea naehae.');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).not.toHaveText('', { timeout: 15000 });
    await expect(outputBox).toContainText('අපි අද ඔරු පදින්න යන්නේ නැහැ.');

});

// 10th Test Case
test('Pos_Fun_0010 - Convert past tense', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('ammaa iiye mata salli dhunnaa.');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('අම්මා ඊයෙ මට සල්ලි දුන්නා.');
});

// 11th Test Case
test('Pos_Fun_0011 - Convert present tense', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('dhaen mama dhodam gediyak kanavaa.');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('දැන් මම දොඩම් ගෙඩියක් කනවා.');
});

// 12th Test Case
test('Pos_Fun_0012 - Convert future tense', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('mama heta oyaata thaeeggak geenavaa.');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('මම හෙට ඔයාට තෑග්ගක් ගේනවා', { timeout: 10000 });
});

// 13th Test Case
test('Pos_Fun_0013 - Convert the singular sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('aeya vaessema gedhara giyaa.');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('ඇය වැස්සෙම ගෙදර ගියා', { timeout: 10000 });
});

// 14th Test Case
test('Pos_Fun_0014 - Convert a plural sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('api haemadhaama poth paadam karanavaa.');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('අපි හැමදාම පොත් පාඩම් කරනවා', { timeout: 10000 });
});

// 15th Test Case
test('Pos_Fun_0015 - Convert a Mixed Singlish + English', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('mama ammage birthday gift ekata radio ekak dhunnaa.');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('මම අම්මගෙ birthday gift එකට radio එකක් දුන්නා.', { timeout: 10000 });
});

// 16th Test Case
test('Pos_Fun_0016 - Convert an English brand name', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('mama pizza hut gihin coca-cola bivvaa.');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('මම pizza hut ගිහින් coca-cola බිව්වා', { timeout: 10000 });
});

// 17th Test Case
test('Pos_Fun_0017 - Preserve Place names', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('Api heta Trincomalee yamudha?');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('අපි හෙට Trincomalee යමුද?', { timeout: 10000 });
});

// 18th Test Case
test('Pos_Fun_0018 - Convert Currency format', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('mata Rs. 1000k Nayata dhenna puluvandha?');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('මට Rs. 1000ක් ණයට දෙන්න පුලුවන්ද?', { timeout: 10000 });
});

// 19th Test Case
test('Pos_Fun_0019 - Convert Time format', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('Api heta oheta 8.30 A.M. vedhdhi aevith innam.');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('අපි හෙට ඔහෙට 8.30 A.M. වෙද්දි ඇවිත් ඉන්නම්.', { timeout: 10000 });
});

// 20th Test Case
test('Pos_Fun_0020 - Convert repeated emphasis words', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('oyaata hoDHAma hoDHAma job ekak hambenna oone.');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('ඔයාට හොඳම හොඳම job එකක් හම්බෙන්න ඕනෙ.', { timeout: 10000 });
});

// 21st Test Case
test('Pos_Fun_0021 - Convert multiple spaces', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('mama     heta      udhenma       naegitinna       hithan       innavaa.');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('මම     හෙට      උදෙන්ම       නැගිටින්න       හිතන්       ඉන්නවා', { timeout: 10000 });
});

// 22nd Test Case
test('Pos_Fun_0022 - Convert line break input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill(`oyaa adha gedharadha inne?
mata oyaava hambenna oone.`);

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText(`ඔයා අද ගෙදරද ඉන්නේ?
මට ඔයාව හම්බෙන්න ඕනෙ.`, { timeout: 10000 });
});

// 23rd Test Case
test('Pos_Fun_0023 - Convert the request command', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('velaavata aevith inna.');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('වෙලාවට ඇවිත් ඉන්න.', { timeout: 10000 });
});

// 24th Test Case
test('Pos_Fun_0024 - Long mixed-language input with slang + typo causes incorrect conversion', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill(`mee baQQ mata adha lecture ekata enna venne naee. adha ammage birthday eka nisaa api dinner valata hotel ekakata yanavaa. oyaata puluvandha mata notes tika Whatsapp ekata send karanna. mama next week oyaata ice cream ekak aran dhennam eekata. apita next week ekee nedha quiz ekak dhenavaa kivve? ee velaavema marks dhenavaa kiyalath kivvaa. hodhata paadam karagena enna. ehenam next week set vemu bro.`);

    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText(`මේ බං මට අද lecture එකට එන්න වෙන්නෙ නෑ. අද අම්මගෙ birthday එක නිසා අපි dinner වලට hotel එකකට යනවා. ඔයාට පුලුවන්ද මට notes ටික Whatsapp එකට send කරන්න. මම next week ඔයාට ice cream එකක් අරන් දෙන්නම් ඒකට. අපිට next week එකේ නේද quiz එකක් දෙනවා කිව්වෙ? ඒ වෙලාවෙම marks දෙනවා කියලත් කිව්වා. හොදට පාඩම් කරගෙන එන්න. එහෙනම් next week සෙට් වෙමු bro.`, { timeout: 10000 });
});

// Negative Test Case 1
test('Neg_Fun_001 - Convert joined words (no spaces)', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    await inputBox.fill('oyaadhahavasataapeegedharaenavaanamkannamonaaharigeenna.');

    const outputBox = page.locator('div.whitespace-pre-wrap').first();

    // Expect the system to "fail" or produce joined text without proper spaces
    await expect(outputBox).toContainText('ඔයාදහවසටාපේගෙදරැනවානම්කන්නමොනාහරිගේන්න.', { timeout: 10000 });
});

// Negative Test Case 2
test('Neg_Fun_002 - Special character breaks conversion', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.fill('api se\\mak karamu.');
    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('අපි සෙ\\මක් කරමු.', { timeout: 10000 });
});

//Negative Test Case 3
test('Neg_Fun_003 - Long paragraph with errors', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.fill('heta apeaaa gedaraa dhaanayakkk nisaaaa mamaa oyaata kaamaaa ekak gennamm');
    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('හෙට අපේආ ගෙඩරා දානයක්ක්ක් නිසාආ මමා ඔයාට කාමාඅ එකක් ගෙන්නම්ම්', { timeout: 10000 });
});

//Negative Test Case 4
test('Neg_Fun_004 - Irregular spacing + breaks', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.fill(`mama      gedhara      
edhdhi               raee              
venavaa.`);
    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText(`මම      ගෙදර      
එද්දි               රෑ              
වෙනවා.`, { timeout: 10000 });
});

//Negative Test Case 5
test('Neg_Fun_005 - Mixed English dominance', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.fill('Please oyaage SMS check karalaa balanna. mama oyaata mage ID eka evvaa.');
    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('Please ඔයාගෙ SMS check කරලා බලන්න. මම ඔයාට mage ID එක එව්වා.', { timeout: 10000 });
});

//Negative Test Case 6
test('Neg_Fun_006 - Invalid numeric formatting', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.fill('2026##$$ dhina oyaalage avasaana vaara viBhaagaya paevaethvee.');
    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('2026##$$ දින ඔයාලගෙ අවසාන වාර විභාගය පැවැත්වේ.', { timeout: 10000 });
});


//Negative Test Case 7
test('Neg_Fun_007 - Excess punctuation', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.fill('api heta hambemudha??!!!!!!!!!!!');
    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('අපි හෙට හම්බෙමුද??!!!!!!!!!!!', { timeout: 10000 });
});

//Negative Test Case 8
test('Neg_Fun_008 - Random English string disrupts accuracy', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.fill('api heta apee ballavaa beheth ganna ekkagena yanavaa jxbhweuvcb fhwacfe');
    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('අපි හෙට අපේ බල්ලවා බෙහෙත් ගන්න එක්කගෙන යනවා ජxබ්හwඑඋවcබ් ෆ්හwඅcෆෙ', { timeout: 10000 });
});

//Negative Test Case 9
test('Neg_Fun_009 - Ambiguous grammar', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.fill('oya heta eddi mage pothath aran enna.');
    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('ඔය හෙට එඩ්ඩි mage පොතත් අරන් එන්න.', { timeout: 10000 });
});

//Negative Test Case 10
test('Neg_Fun_010 - Repetition overload', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const inputBox = page.locator('textarea');
    await inputBox.fill('mama mama mama mama adha adha adha pansal pansal giyaa giyaa giyaa giyaa.');
    const outputBox = page.locator('div.whitespace-pre-wrap').first();
    await expect(outputBox).toContainText('මම මම මම මම අද අද අද පන්සල් පන්සල් ගියා ගියා ගියා ගියා.', { timeout: 10000 });
});

// Pos_UI_001 - Verify Sinhala output updates automatically in real time
test('Pos_UI_001 - Sinhala output updates automatically in real time', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');

    const inputBox = page.locator('textarea');
    const outputBox = page.locator('div.whitespace-pre-wrap').first();

    // Type gradually to simulate real user typing
    await inputBox.type('ammaa heta kadee gihin mata murukku geenavaa kivvaa.', { delay: 100 });

    // UI validation: output should appear automatically without clicking any button
    await expect(outputBox).not.toHaveText('', { timeout: 15000 });

    // Confirm Sinhala text is generated
    await expect(outputBox).toContainText(
        'අම්මා හෙට කඩේ ගිහින් මට මුරුක්කු ගේනවා කිව්වා.'
    );
});
