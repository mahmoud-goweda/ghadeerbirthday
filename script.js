document.addEventListener("DOMContentLoaded", function() {
    const introText = "الى من تقربت اليها بنفسي ,فاسرتني بين زراعيها دون الناس,الى من اصبح حضنها وطني وادركت بين عينيها الخلاص,الى اختي وصديقتي وحبيبتي ,اليك انت اهديكي نفسي.\nكل سنه وانت طيبة وبخير ياعمري انا ودايما معايا يارب, بحبك ";
    let index = 0;
    const typingSpeed = 120; // السرعة بالمللي ثانية
    const typingSound = document.getElementById("typing-sound");
    const typingSound2 = document.getElementById("typing-sound2");


    function typeEffect() {
      if (index < introText.length) {
        typingSound2.play()
            document.getElementById("intro-text").innerHTML += introText.charAt(index);
            index++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            document.getElementById("intro-text").style.display = 'none'
            document.querySelector('.slider').style.display = 'block'; // عرض السلايدر بعد كتابة النص
            
                typingSound.play(); // تشغيل الصوت
            showSlide(); // بدء عرض السلايد بعد كتابة النص
        }
    }

    // document.addEventListener('click', function() {
    // }, { once: true });
        typeEffect();
});

let slides = [
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPhVBKyCWRIMYziNRzOCsyAavP-2ptPeuBUYfuLJJFmbzIGBBXSYRw2bTZv65D_gpoNfaiuBSnjNmypvX-aCI_yHrhb-T1qRN0tLEdNUTFB5t7wKdUa5-O8N-9EOow_gNcDxP8Ha10GBzv91GNHJTC4Fw=w1233-h927-s-no-gm?authuser=0',
        text: 'كم أحببتك حتى أصبح الحب في قلبي نارًا.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczP0hqLus9dT8p1uC6E-h_NV2sxD8U0yJzL9oVrm-lm8dklRek88SCYsZ2HTMED-AcA5G6_6HkGvSkHs_ngeiY-rDLIazaSlA4RnlFEtIuonbNlPcKChfL1DvAw9y-M92H1q3qGFpM_jl2MmBu59tooewA=w1233-h927-s-no-gm?authuser=0',
        text: 'يا حبيبتي، كل الحب الذي في الكون لا يكفي لحبك.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPG1QYAdtUFeZ-MRMT9lDvZurRdKX5vGOBklfwotA9g1o6aFRvIZqSWShXIRbpwLMU__TeHIee7mBe529kYspYQJM9Bf7COKBIvjJZXGyI6xC_bwb44kXp9PAAIGGVEeKFkCNm_SMQWLkG4O9DIKEu-SQ=w1233-h927-s-no-gm?authuser=0',
        text: 'أحبكِ حبًا لو تحول إلى ماء، لأغرق العالم بأسره.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczP1gUlGTl1Rpr2BS4YV-22NimZRG2cr03MoBYpFLGtCNeUau3W5FhwBQUjfkfhg49Mcr1xLCXAh2w-e0Yrd99MGaLix2HkW7bpEzw0osu7X004j0FY6em42VjWlunjC2fxw1HDsqMnYRDztBonnIOh35w=w1233-h927-s-no-gm?authuser=0',
        text: 'أحبكِ أكثر مما أستطيع التعبير عنه بالكلمات.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczOpBx02La_kjywPNfpCTcme4Ww9BG0p4AgECHFIJV7BT721y0gAtL6gQmXGU8g3emYiRD7-Q6Okd20Hm5OXaGy1vhOZgX-Iuj_0iHs2MMYpin6_cslR5kfdlJrFlvSnNLoNIdZ8ZbTeVgWGPCyThwvQUg=w1233-h927-s-no-gm?authuser=0',
        text: 'يا أجمل حب عرفته، ويا أجمل قدر كتبته.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczP2Oynk6atzdRbsHeQNTxEqzvpnOa3fZq0WOArK1CMQKY35sewBpoBhy0rNASDmKSrCgT2y86c3qDS292j4kJSF-qtqEr6B1YrSE7VmYKLriy8Zv2sa5BefGc9R8_dthZgjzL66ezS79pulCBgKkUZ1nw=w1233-h927-s-no-gm?authuser=0',
        text: 'أنتِ لستِ حلمًا، بل حقيقة أعيشها كل يوم.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPayWW377PK1N3riNJrtbw1WJaFAH45JKIiV9TjcxoSEi4Uu1ALvUYBBZHZFjI5PZVp22VaizrZ74HzSrAqVXXoJ3ecswGFaYd9GsgozA1akgEu4kUTBkAk5jNX4qIMy5F3GLJBR5jw1JXn5tYkWxe1KQ=w1233-h927-s-no-gm?authuser=0',
        text: 'أحبكِ حتى ينتهي الحب من الوجود.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczN1yuwQlcxDD_himYnhZeM7wbdtsht_KvY8Er9VKa5gKP1dJ6gSyuOoezYAYYbBes5Paz14-4GKuX15svmgxZdY9oF6mmBuhUQdgQkjJ04xSCMaxMA3-30CT_tKKSXs_k0fTmCncAVU5pKaEjbAGIBvyg=w1234-h927-s-no-gm?authuser=0',
        text: 'يا حبيبتي، كل لحظة معكِ هي عيد.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPcUyiMZq1YU97bNYq1NcV23JU0FgoYIXfSBP1QLQVYPU6H64LIpVVL3Etw0zlscZALIEDy-H0elV1iSyxjGTBpmHJXvIWUt684-Y4QcUeykZE_ruKALQ44qe93Sv6fLLU2-JMsGOCXkF3LW_mK05eU4Q=w1234-h927-s-no-gm?authuser=0',
        text: 'أنتِ الشمس التي تضيء حياتي.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczO_6X5IewSX5DNfgvpKhASg4p5r_qRdseWWKHWht_vrCWOS0duY8i7kwzyU1pE31U9oaXVIr74eCbMpHxLJDj_ppgkKsE4KjGle4qt1zM7JxgCeXTxZarHIXf-sT3SGBsZxO9a8UHxdGFpH5WaAZrJj9g=w1236-h927-s-no-gm?authuser=0',
        text: 'أحبكِ حبًا لا يمكن قياسه.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczOW3i9Fls_J_RrjI6N3zbJyOS7mBkDGp5hvaI-D7q579ONXBcb2tqSNEd61qaDKOw17_SQq1R8IglJXynYB29TUm24XArANo5_TyU8mPhEpZNjyLXMMJeO9h5qMZgaql-0vDzjehFo-zeDLebmhUTkXcg=w1233-h927-s-no-gm?authuser=0',
        text: 'يا حبي، أنتِ النور الذي ينير ظلمتي.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczNlCbxhNFX-lWWIkVRinzcvDvYcxAQMF5VeVl3ctzQ_3iREJuS-pkt1k30laORPMilUUOKtnAXjv7JMwvk7VmWD3y4v8h6XWUEKVB8JTHPj3JI0qlFGP2SVIuBHrPAUFD30il0KaRcYHdpdeMTX7CtEYQ=w1233-h927-s-no-gm?authuser=0',
        text: 'أنتِ القلب الذي ينبض بالحب.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczN9d-f0lIP0Zc0h3XOCgILDF7QkBRGllK7Ye03TXIw6wl3tOUv7wtwwP5rnRVW76gFgxmCvhFEIRDFY3V3U-hNFFq2vHFZzRPUV33XoICrlhbICwPRL8EH4igbdbAPxxlibbmyBK6JkdlA0DdLTVjsluw=w697-h927-s-no-gm?authuser=0',
        text: 'أحبكِ أكثر مما تتخيلين.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMNB8v5stPmyAahmJ0wfu3ykkpCA9PVdEOd9nP6qso8By826Mjq9cLzrSlFG8p7qijdWRbJNbgNDQRxroOUJNW7rj6iJ_aWlnzROWyZ5VctpoAPz2lZNmC-PlfY4DJCQdhiZHmeKuiI0g374C0v4eZT7A=w1236-h927-s-no-gm?authuser=0',
        text: 'يا حبي، أنتِ الأمل الذي أعيش لأجله.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPyNraEuGZK7t6TqQT-QOSMUyJmUyKZ3psgCOI414yju3CEWJAJX_nGV88dgLw-dkvTxmIcgDqTCkRv9LVm1NwMeMbR3tcRRIX-6eTrOazXPferqxqjTyj4VTicU0Mtex8aWdnEm7Egi_KVx5FjPykcBQ=w1236-h927-s-no-gm?authuser=0',
        text: 'أنتِ الحلم الذي تحقق.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMZdFybc_Az4Liv7W8-xqXbQ39JfTItIXfeg4Wh3hDIxlNLzMJcvQMWwBm7wBQLak4PnY566F7Zjy1DInx2YtZFytZNmTSbYFtU4fiL_D8K7iXBJkmGvEIX0iqadRocACv_3fK5z9wHJDM3o5Ck9z2Muw=w1236-h927-s-no-gm?authuser=0',
        text: 'يا حبيبتي، كل لحظة معكِ هي نعمة.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczN61taGWXkXuyp_BSRl8Yo3M-j0uWrMiZt-63bdpya5dhzUtsOWX6wpY9JLYG2l5uUc5TccbFK90px_BzyFZvG4tEj8vq2tUt1yNrfr0dbOcVtsUHEiqk-ZBW_hqYAhKzU3C_ogXXsnnYGP2xo0_MP-ig=w1233-h927-s-no-gm?authuser=0',
        text: 'أنتِ الزهرة التي تزين حياتي.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMo1vYzipTMXctn5OXX7FsRm9eyNeEw68s3t8kha6gYt6POIPzBeK_rzHTudw0uZ4h1Xm5cQzOfH1sUO-6ivkL47H2Cc4X5x56zC8EdTvHnbRn86DifXHnir5ku2IjocRw8DWv4phknE2MXWnTHSBWecg=w556-h927-s-no-gm?authuser=0',
        text: 'أحبكِ حبًا يفوق الخيال.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczN3q-7-hdSPHTROH61b2tJWjWU7Dm0lLWAHVh6kmOgEywWWLlRWSi6ynMnAMvQt42lKMfybAJZuz8NvOM1IldJFvCjj8kA6wD3e0C0EEUpGQZNituMfOxePStk2fAocMUcAvyVr26C9yPtIAYWqt37fdg=w695-h927-s-no-gm?authuser=0',
        text: 'كل لحظة معكِ هي نعمة.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPLT64HuMGZskDrl97VSo50vWA8eJ38jW9qpcVsFkoW6JRYNgZE-5y6EhQkjMl6NR_2Co9qOJF0HB3092GlXvR6-6hG9QsYy3bA049i7OrzmmHIiA15fX2p6En_KBwJk0raEKLQz5oF-1o9XTJ-jbFUfw=w695-h927-s-no-gm?authuser=0',
        text: 'يا حبي، أنتِ القلب الذي ينبض بالحب.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPxIPeKh_k-cYiJ9sV6wiyuV33Qk9QX8mOiGsxsfKMysEQ6BZaO3k_ShzUFOMhbypkYOWGyXMPrcXW1O_xhua7TB0ctSKXzY_RhnkcEesILbS8otQAWzaYym0aow7tKjpxEgWcGbibkJh4NJaUxRnq6lg=w973-h927-s-no-gm?authuser=0',
        text: 'أنتِ النعمة الأكبر في حياتي.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPeTt8qeO1oIPmy8HpZyeEkLTV2PC4_mrH_vY2Gr5640e6BZRzkmLU1Ls_6Q4Ii45_PMgN-CBwvzZvLgGINz0sp1wM7FqfH0TsnMIAcXl3hgeG7VL-mDNhNziq-7GQGmurSKK4pu8fTER3DJwuD22E96w=w695-h927-s-no-gm?authuser=0',
        text: 'أحبكِ حبًا لا يمكن وصفه.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMwWiwW9MtDV8JNPDb7W6QVLKKPT94D05YlMF2uMF0Y8_qFu5GTzDGL21Ef419MpvPRHe2Fd9kR6FpPworBptln5S4V7YwU_9kiWL7O_XNdYOVWg1U0mUnuwppJs9_0f0puExPZiAJ1w1SU2wiZevYGKg=w695-h927-s-no-gm?authuser=0',
        text: 'يا حبي، كل لحظة معكِ هي عيد.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczO_ZhS_AknSIY0Y-eC9afkyRNjyKtqL9nVU3K5AUm2iVNd1J2Vrp3Msy1zDZsby8dKYpvos-XNoqu_3TaxI7Nz20BTdxHsflIhvCPWwNdBYdiCCdEX7i9YbqASMWGeAmE1UYhTpyFL_iDAsDMbT0pKmHw=w695-h927-s-no-gm?authuser=0',
        text: 'كل عام وأنتِ السعادة التي تغمر حياتي.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPQOEF6yLdJ0PF6XFbPDh4N9sVGTkPmFDxQ2B6M7_Ol4BY8v5JbFIzidSXpTkXALcqTlB2U7XZhdh9iCVkElLzZnbql_5nMCLrEVbxTrjiDaZhL1nrfkLEV6oNqmcVR3LmdnJSLb44Cc2Xsguy7LzaXQg=w618-h927-s-no-gm?authuser=0',
        text: 'أنتِ النور الذي ينير حياتي.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczM_48DhAPnYfhD0fnBSGBVNV5tR5qpZXWnDP-pO_SnrcYFFbOrZztbzBgeWU3V3Yu-70FyfdDpL0R0NKJwBY6KvXo-_N41yrsL9hno1k-tC8NacDcA3WqHWRf8wt5jJbMzDDdTDW-cjGDEBSaYSbOV9jQ=w618-h927-s-no-gm?authuser=0',
        text: 'أحبكِ أكثر مما يمكن أن تتخيلي.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczNEiJ0I9Xz0FaDXsw49kMCq6TLH1-zWM2RJ40QAlZ25Sn3XLOHGV_BU6UNys6X6nUBs8FpYPNjJhikGK1fJp_FOYP3Cn7sbIHrRHabEQfDxOZ7G3sB53SyKtkK5xXc06snru8Si4GLQASfQWqOOVf-34A=w1391-h927-s-no-gm?authuser=0',
        text: 'يا حبي، أنتِ الزهرة التي تزين حياتي.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMjZLc_EZtT3LfdLMs28kl4mAknOxQ3NaFxWdrtLPnVvtgKpfPrUyaI9d8RS-CbKsU1lCnQkS3sUFZMTOIQKKTlZR0SqTaHzhs8Q2MVktiOg0s5oasDc6nOzGysJOoOtX1uVZpZbEoKhNxtfZxHvcekrA=w618-h927-s-no-gm?authuser=0',
        text: 'أحبكِ حبًا يفوق الوصف.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczO_n7JVFUVkUHExNBhJsW7xw8-0oqZrRXQMWPzXlx3kcVXSU4HhlHNpFMxM0y-Ts4hupsdYykxvfBc7-5Kckuf5mPY61ILgsYVb_zUb5wt-FiT2THHx35uorHNIjxgqpqjR9STperJucS-MQ_3bJNneqA=w618-h927-s-no-gm?authuser=0',
        text: 'عيد ميلاد سعيد لأجمل امرأة في حياتي، أحبكِ.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczOF4-Uf1YE4rhJO8Z7GxGEs4fAtPQoU0XKpi8tDr4RBpoxBGJas0ic86nQPUub6lwUwwaHeDL-ETh1FwUUKulZUsi-uyniemOYR-3kabU2KfhX3aMJXoi1aacwAGc89aVdOczAqB3XyMtvgLNjAx49i1g=w1391-h927-s-no-gm?authuser=0',
        text: 'أنتِ الحلم الذي أعيش لتحقيقه.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczNhM2vVFQma7z2QLSP3bgqQdOTt8gxHUk-EBewQv7QaDI--qrpSLNt9nt5BT8b2kvMuF0jkN3SJSu4Wsfc8lLd-d30rePZlzC_FcGdLlYQ29UZlbHd5zp-580NtA8_j2-gcdw2iPJSi0w8WbObsKPGaOA=w1391-h927-s-no-gm?authuser=0',
        text: 'أنتِ الشمس التي تضيء ظلامي.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMhx894hKZGrNtpDU4iDSELtLlabSi73ol-eUgg3KBAorc1LPwYLl9QSkXLzX3E2-cvNq1bwWf-NYy37Em_L4J-xBgdxhpt0qxe8zLiSO79tr51tyAzpNFr9yToU75Aq5bXggrkXG3FfCRKpmFtIosoIg=w618-h927-s-no-gm?authuser=0',
        text: "أحبكِ بكل ما أملك، ولا أملك يا عمري سوى حبك."
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczN4StWXTq9Ccw-0AkbG9FsoZhbk9wWQIyzOIGjYSA6E3cbJkCNXCrEG3DhgOIkPiXSMiZrC1O-SNd2ktSMb0X2RGnhE6nygZFoMAJLup9HifZiQd7WVEwanbOAWDhKIBU4uJHOj9smCxjreVQPCq_Si4A=w1391-h927-s-no-gm?authuser=0',
        text: "في حضوركِ، أجد أن الزمن يتوقف، كأن كل لحظة معكِ هي الأبدية."

    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczO9hLPNsBSrLpsc23Mqgtr7Zv73N_dyE7AP4GApWZ1vb7XpbD_PVG2M6il3qa9hyKs1P3mP2JWIcxhwbLYa-JpxDP6l1ltclg7EaQE3X66dKY_jAOYTLvd5EJ_i9Wnjm0xVdLxNmk5KpUPqdRiaXEUO9Q=w1391-h927-s-no-gm?authuser=0',
        text: "كلما نظرتُ في عينيكِ، أدركتُ أنني وجدتُ موطني الأبدي."

    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczO02Ug2ZzmYmYwq88SWBjSyQz0aNRuA02ttucE5HZrMK6IkM8Itid5thqa3RypDgIVZKMUvzIb9NYruTq6_dXkEsWnwPA1oufWKt3cMqj9VITUKvxi5s1vnyMORRRUhQXd9vK0F54HyEUdTNKyYymEk5Q=w1391-h927-s-no-gm?authuser=0',
        text: "أشعر أنني أعيش في حلم لا أريد أن أستيقظ منه، طالما أنتِ بجانبي."

    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMifwiaLpT5wRpmSbeooKawDXLbcezbsyQg2IKHYdZjAyssEJM7dz0LIU1P6CDHuDeo-FbRcRr9MoSl0aFMcbN04fvwOXuU2yipJC773P5eKM7ttGRBfQyRwGp5t6wZf1YWT4Uug73L816GjCSJSZcnZA=w1391-h927-s-no-gm?authuser=0',
        text:"أنتِ الهمس الذي يهدئ روحي، والأنفاس التي تحيي قلبي."

    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPgTe_KJszv8f9duslWKeN8a1bLsJcm_bccJa23y6YkiQg7425JrHoYqZXeHnlrKVw0tQ_LrCdxw5G55NlSgHAv4u2RaXP1KaS7ZtWMb7eDkN24bvILTyc_n-KNN0TukHe5Cky4mD01quW2V1qAYRCAAA=w1391-h927-s-no-gm?authuser=0',
        text: "أنتِ الروح التي تسكن جسدي، والنور الذي يضيء دربي."

    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMdBAZ-ktQAtxgS4Uc708pn-NrnJ56lwjr1IeFfjmkvUhAgyMpkVDsJ1xx9ZfeEqwgZdUJWzJXVI9Ubf_RafAh0I84u9qsTPAEDs2KyLfZY9LiI7AoOsme2W3kxGhgEDrWClQKWUvPXSoSWIGIJacv6gA=w618-h927-s-no-gm?authuser=0',
        text: "أنتِ النعمة التي أحمد الله عليها كل يوم، والهدية التي سأظل أشكر القدر عليها."

    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMykCibOhFTALhozl7sDtD0dcVqjZ4jGSTJCNvh1D8lDnH9ApZoCREXKKCAtpd8HVdv8KbMx7QJcuImGtbHENRP7UcA_aRM2DfKIAMlEomhlEaVk_B3lFA6ZL2JGMcW0GOLywKRvsbJa17ch0irD8k6Mw=w695-h927-s-no-gm?authuser=0',
        text: "في غيابكِ، أشعر بأن العالم يفقد ألوانه، وبوجودكِ، يعود كل شيء ليشرق."

    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPjpcPcyNw30ZdcyJMYkpccZ9tByCmAvR2gVkq48-XdyFRe6AZ9hcnLYRu-0wOA2vi_b8AeLayLkoNynOFuEBnhZBbZGyvCqaTTXb8kB-BFoUlqy4F5LbRes3ZNtDMBUjK35YGLakClcwE2w1Xm4c-rEw=w695-h927-s-no-gm?authuser=0',
        text: 'عيد ميلاد سعيد لأجمل امرأة في حياتي، أحبكِ.'
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczOnIZf7wGU67_bEgOYxFkXb-zzDx2o2WvxhrKrJzNyiTGFlbfyRUEM5OwTswoR6gdD9TpayzjK7Ej17SrMv8xekSfY_az5ISYoDq-Uncog2QjKw5BP8GSY5aMmv_qogIHahMN3UkjNnAnpC6v1VfpiVDg=w695-h927-s-no-gm?authuser=0',
        text: 'كل سنه وانت طيبه ياحببتي انا وكل سنه وانت معايا يارب وفي حياتي ياعمري وعيوني انا بحبك وبعشق ويارب دايم معايا في حياتي منوارها يانور عيوني انا بحبك اوي '
    },
    {
        image: 'https://lh3.googleusercontent.com/pw/AP1GczNuBWj0Ab3niyxaDrDOVAKI4Y7L49bhSX9rhnA4KdpvS27VFE6qhXvOwLSJYIn_AywqCfo1fg3OnCAGEmb2RmEc5G6X_j6Q0KWOYjdaf104ls44w3ELMZFYBRI3TpXrX1IBM7p2G5CR2ZtR8O1dXMt9LQ=w695-h927-s-no-gm?authuser=0',
        text: 'كل سنه وانت طيبه ياحببتي انا وكل سنه وانت معايا يارب وفي حياتي ياعمري وعيوني انا بحبك وبعشق ويارب دايم معايا في حياتي منوارها يانور عيوني انا بحبك اوي '
    }
];

let slideIndex = 0;
// showSlide();

function showSlide() {
    let slideImage = document.getElementById('slide-image');
    let slideText = document.getElementById('slide-text');
    slideImage.src = slides[slideIndex].image;
    slideText.textContent = slides[slideIndex].text;
    
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    setTimeout(showSlide, 3000); // تغيير الصورة والرسالة كل 3 ثوانٍ
}
