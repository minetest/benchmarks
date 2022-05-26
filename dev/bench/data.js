window.BENCHMARK_DATA = {
  "lastUpdate": 1653579342167,
  "repoUrl": "https://github.com/minetest/benchmarks",
  "entries": {
    "Minetest Performance Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "sfan5@live.de",
            "name": "sfan5",
            "username": "sfan5"
          },
          "committer": {
            "email": "sfan5@live.de",
            "name": "sfan5",
            "username": "sfan5"
          },
          "distinct": true,
          "id": "5f9bf04df20c57c6cedd609f4613e5998e9efbc7",
          "message": "test",
          "timestamp": "2022-05-08T20:26:41+02:00",
          "tree_id": "e127c65735d681fe3b532976b5bc09db4f6e0e00",
          "url": "https://github.com/minetest/benchmarks/commit/5f9bf04df20c57c6cedd609f4613e5998e9efbc7"
        },
        "date": 1652034845091,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.01407,
            "range": "± 0.000211",
            "unit": "us",
            "extra": "100 samples\n2106 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.623529,
            "range": "± 0.010151",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.446688,
            "range": "± 0.009440",
            "unit": "us",
            "extra": "100 samples\n66 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.171553,
            "range": "± 0.023953",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.904088,
            "range": "± 0.089072",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 197.5355,
            "range": "± 1.173682",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 143.05482,
            "range": "± 1.089124",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 392.68704,
            "range": "± 1.754082",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.537078,
            "range": "± 0.012703",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.504819,
            "range": "± 0.026743",
            "unit": "us",
            "extra": "100 samples\n20 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.540132,
            "range": "± 0.016814",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.428111,
            "range": "± 0.026464",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 143.99761,
            "range": "± 0.978339",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 655.7244,
            "range": "± 2.420869",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 143.67862,
            "range": "± 1.306270",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 639.19116,
            "range": "± 2.428546",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.01768,
            "range": "± 0.027675",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.33448,
            "range": "± 0.134983",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.863574,
            "range": "± 0.022115",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.331297,
            "range": "± 0.215792",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 584.73947,
            "range": "± 6.272172",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5729.96713,
            "range": "± 189.306501",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 434.41253,
            "range": "± 4.053093",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3997.18508,
            "range": "± 165.970292",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "97950a4ca33f03be98129a86b6de25a612e9507d",
          "message": "Minetest: 8756b7a735084c6a80f5ab031fa1d889528d6fde | Irrlicht: 51ae495c4ad74d4df19534bf2f16b7a469c24bc5",
          "timestamp": "2022-05-15T21:18:55Z",
          "url": "https://github.com/minetest/benchmarks/commit/97950a4ca33f03be98129a86b6de25a612e9507d"
        },
        "date": 1652649937992,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013939,
            "range": "± 0.000234",
            "unit": "us",
            "extra": "100 samples\n2152 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.631654,
            "range": "± 0.013582",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.446782,
            "range": "± 0.012338",
            "unit": "us",
            "extra": "100 samples\n67 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.1684,
            "range": "± 0.024714",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.926088,
            "range": "± 0.091931",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 200.14662,
            "range": "± 1.277743",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 140.57483,
            "range": "± 1.022877",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 398.74327,
            "range": "± 2.704651",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.533721,
            "range": "± 0.010271",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.487469,
            "range": "± 0.029133",
            "unit": "us",
            "extra": "100 samples\n20 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.535328,
            "range": "± 0.010530",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.425971,
            "range": "± 0.046562",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 140.00082,
            "range": "± 2.125585",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 655.68854,
            "range": "± 3.381739",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 141.20482,
            "range": "± 6.325027",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 639.2273,
            "range": "± 2.200099",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.011613,
            "range": "± 0.020991",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.311886,
            "range": "± 0.118985",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.862897,
            "range": "± 0.033504",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.306629,
            "range": "± 0.085722",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 588.26874,
            "range": "± 7.664631",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5391.13006,
            "range": "± 22.337746",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 434.47363,
            "range": "± 5.802890",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3813.31565,
            "range": "± 14.711547",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "20505f0f6028a44729b9265d212fdd893b8416cc",
          "message": "Minetest: af37f9dc542e31f34d53da995ed86f2a3eacd9a5 | Irrlicht: 51ae495c4ad74d4df19534bf2f16b7a469c24bc5",
          "timestamp": "2022-05-17T18:27:49Z",
          "url": "https://github.com/minetest/benchmarks/commit/20505f0f6028a44729b9265d212fdd893b8416cc"
        },
        "date": 1652812500557,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013802,
            "range": "± 0.000164",
            "unit": "us",
            "extra": "100 samples\n2163 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.635451,
            "range": "± 0.013065",
            "unit": "us",
            "extra": "100 samples\n47 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.447645,
            "range": "± 0.016235",
            "unit": "us",
            "extra": "100 samples\n67 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.168278,
            "range": "± 0.022832",
            "unit": "us",
            "extra": "100 samples\n26 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.96185,
            "range": "± 0.238621",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 199.8624,
            "range": "± 1.258488",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 140.603,
            "range": "± 1.277521",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 398.33984,
            "range": "± 4.176740",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.533914,
            "range": "± 0.010837",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.487868,
            "range": "± 0.025973",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.535629,
            "range": "± 0.013363",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.42482,
            "range": "± 0.026856",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 140.177,
            "range": "± 2.049608",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 654.99668,
            "range": "± 2.703640",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 139.50298,
            "range": "± 1.601835",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 639.29256,
            "range": "± 2.483075",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.012274,
            "range": "± 0.025769",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.307642,
            "range": "± 0.240184",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.861749,
            "range": "± 0.019465",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.279603,
            "range": "± 0.092482",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 587.68419,
            "range": "± 6.099793",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5361.46516,
            "range": "± 20.534031",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 435.69709,
            "range": "± 4.859073",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3811.27316,
            "range": "± 16.812353",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "d50644eeeb9f37779ee846fdb4c0308b3241212f",
          "message": "Minetest: 273bfee9a193d0dd2e9f9b400add980c0b5202a7 | Irrlicht: 00a7741cd4f34a084d81e6bbec7edca172d427ee",
          "timestamp": "2022-05-18T12:46:31Z",
          "url": "https://github.com/minetest/benchmarks/commit/d50644eeeb9f37779ee846fdb4c0308b3241212f"
        },
        "date": 1652878418849,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013389,
            "range": "± 0.000223",
            "unit": "us",
            "extra": "100 samples\n2217 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.678826,
            "range": "± 0.008758",
            "unit": "us",
            "extra": "100 samples\n44 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.449461,
            "range": "± 0.016599",
            "unit": "us",
            "extra": "100 samples\n68 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.208174,
            "range": "± 0.027399",
            "unit": "us",
            "extra": "100 samples\n25 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.914084,
            "range": "± 0.147378",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 197.16335,
            "range": "± 1.431902",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 142.21767,
            "range": "± 1.734865",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 397.05367,
            "range": "± 2.454199",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.534185,
            "range": "± 0.009905",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.555218,
            "range": "± 0.038664",
            "unit": "us",
            "extra": "100 samples\n20 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.544952,
            "range": "± 0.020867",
            "unit": "us",
            "extra": "100 samples\n55 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.484446,
            "range": "± 0.027239",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 139.50863,
            "range": "± 1.358615",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 672.66897,
            "range": "± 6.519116",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 139.81867,
            "range": "± 1.470923",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 653.20774,
            "range": "± 4.060285",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.017244,
            "range": "± 0.019727",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.335068,
            "range": "± 0.093030",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.864523,
            "range": "± 0.015844",
            "unit": "us",
            "extra": "100 samples\n35 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.37962,
            "range": "± 0.128906",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 567.71896,
            "range": "± 8.564868",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5573.25414,
            "range": "± 195.678660",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 429.98709,
            "range": "± 3.785099",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 3935.93153,
            "range": "± 141.688985",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "ba6ba528d399c76f6a3ba5dcd9d93b3328eab454",
          "message": "Minetest: a4ef62f5b215fe0f23e3e50672f1538854db4ed9 | Irrlicht: 00a7741cd4f34a084d81e6bbec7edca172d427ee",
          "timestamp": "2022-05-20T21:20:33Z",
          "url": "https://github.com/minetest/benchmarks/commit/ba6ba528d399c76f6a3ba5dcd9d93b3328eab454"
        },
        "date": 1653082083736,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.014354,
            "range": "± 0.001016",
            "unit": "us",
            "extra": "100 samples\n2349 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.7354,
            "range": "± 0.067462",
            "unit": "us",
            "extra": "100 samples\n48 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.512503,
            "range": "± 0.079802",
            "unit": "us",
            "extra": "100 samples\n68 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.273897,
            "range": "± 0.152703",
            "unit": "us",
            "extra": "100 samples\n27 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 7.221846,
            "range": "± 0.739525",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 195.22625,
            "range": "± 27.253630",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 158.51303,
            "range": "± 12.138179",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 414.45272,
            "range": "± 45.298533",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.519949,
            "range": "± 0.007943",
            "unit": "us",
            "extra": "100 samples\n55 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.67782,
            "range": "± 0.256508",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.572414,
            "range": "± 0.068768",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.403676,
            "range": "± 0.173939",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 144.56492,
            "range": "± 20.115579",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 676.09241,
            "range": "± 81.792442",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 152.23497,
            "range": "± 18.077344",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 683.34047,
            "range": "± 78.568877",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.080601,
            "range": "± 0.140098",
            "unit": "us",
            "extra": "100 samples\n32 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 6.235844,
            "range": "± 0.803617",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.036034,
            "range": "± 0.122920",
            "unit": "us",
            "extra": "100 samples\n36 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 4.897784,
            "range": "± 0.446996",
            "unit": "us",
            "extra": "100 samples\n8 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 602.03697,
            "range": "± 73.807450",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 5920.58574,
            "range": "± 307.886757",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 477.54607,
            "range": "± 43.944833",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4295.16508,
            "range": "± 190.198683",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "7764fa2180d5755b032abe2d8213b63283462334",
          "message": "Minetest: dc45b85a543b4c8ad72f69a554ecfe7f0a60c533 | Irrlicht: 593103a26148b7154b159b9ae728fd53b4e7ca84",
          "timestamp": "2022-05-21T15:22:41Z",
          "url": "https://github.com/minetest/benchmarks/commit/7764fa2180d5755b032abe2d8213b63283462334"
        },
        "date": 1653147067198,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.016552,
            "range": "± 0.000480",
            "unit": "us",
            "extra": "100 samples\n2153 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.755889,
            "range": "± 0.110588",
            "unit": "us",
            "extra": "100 samples\n49 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.761074,
            "range": "± 1.830475",
            "unit": "us",
            "extra": "100 samples\n69 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 1.380503,
            "range": "± 0.030066",
            "unit": "us",
            "extra": "100 samples\n27 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 8.402558,
            "range": "± 0.909886",
            "unit": "us",
            "extra": "100 samples\n4 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 244.18058,
            "range": "± 34.085770",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 172.94019,
            "range": "± 11.643061",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 492.02605,
            "range": "± 57.037613",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.645413,
            "range": "± 0.072432",
            "unit": "us",
            "extra": "100 samples\n50 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 1.816548,
            "range": "± 0.045915",
            "unit": "us",
            "extra": "100 samples\n20 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.642209,
            "range": "± 0.031642",
            "unit": "us",
            "extra": "100 samples\n56 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 1.773707,
            "range": "± 0.254716",
            "unit": "us",
            "extra": "100 samples\n21 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 181.86777,
            "range": "± 18.763780",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 809.12789,
            "range": "± 24.191730",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 179.70607,
            "range": "± 10.607850",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 839.48673,
            "range": "± 371.243138",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 1.238785,
            "range": "± 0.193540",
            "unit": "us",
            "extra": "100 samples\n30 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 8.153378,
            "range": "± 0.765997",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 1.046282,
            "range": "± 0.178177",
            "unit": "us",
            "extra": "100 samples\n34 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 5.477963,
            "range": "± 0.487226",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 702.02533,
            "range": "± 43.305726",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 7109.36093,
            "range": "± 768.228758",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 665.73656,
            "range": "± 479.258864",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 4881.15527,
            "range": "± 168.189258",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "cc056cd29364f4ab705e32664ff31f7463f335df",
          "message": "Minetest: 2f32044273d107e82fb1c35d4a0f616fa480cdf0 | Irrlicht: 593103a26148b7154b159b9ae728fd53b4e7ca84",
          "timestamp": "2022-05-21T18:25:34Z",
          "url": "https://github.com/minetest/benchmarks/commit/cc056cd29364f4ab705e32664ff31f7463f335df"
        },
        "date": 1653157960094,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013783,
            "range": "± 0.000441",
            "unit": "us",
            "extra": "100 samples\n2154 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.055094,
            "range": "± 0.002556",
            "unit": "us",
            "extra": "100 samples\n550 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.041245,
            "range": "± 0.000782",
            "unit": "us",
            "extra": "100 samples\n720 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.153509,
            "range": "± 0.003539",
            "unit": "us",
            "extra": "100 samples\n194 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.924954,
            "range": "± 0.166968",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.408127,
            "range": "± 0.023780",
            "unit": "us",
            "extra": "100 samples\n74 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 30.04339,
            "range": "± 0.289958",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 90.14558,
            "range": "± 1.898701",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.120205,
            "range": "± 0.000897",
            "unit": "us",
            "extra": "100 samples\n246 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.273332,
            "range": "± 0.005445",
            "unit": "us",
            "extra": "100 samples\n110 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.111217,
            "range": "± 0.002371",
            "unit": "us",
            "extra": "100 samples\n265 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.243419,
            "range": "± 0.007763",
            "unit": "us",
            "extra": "100 samples\n123 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.90429,
            "range": "± 1.111950",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 193.51337,
            "range": "± 2.244059",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 69.186,
            "range": "± 1.403516",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 184.74165,
            "range": "± 1.898013",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.209836,
            "range": "± 0.006714",
            "unit": "us",
            "extra": "100 samples\n144 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.73006,
            "range": "± 0.006555",
            "unit": "us",
            "extra": "100 samples\n41 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.164941,
            "range": "± 0.008789",
            "unit": "us",
            "extra": "100 samples\n179 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.483778,
            "range": "± 0.009449",
            "unit": "us",
            "extra": "100 samples\n61 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 114.30902,
            "range": "± 2.784908",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 533.91443,
            "range": "± 4.505455",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 86.14453,
            "range": "± 2.199041",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 440.34576,
            "range": "± 3.296135",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "ad697bc8320db9ff805cbeba97adec046d27462b",
          "message": "Minetest: 9f338f5a56e5adee3d11d59827f7e2b8a714e6c2 | Irrlicht: 128cf1696c2803e12ebbdd3ee034e0c9eea90fae",
          "timestamp": "2022-05-22T01:48:52Z",
          "url": "https://github.com/minetest/benchmarks/commit/ad697bc8320db9ff805cbeba97adec046d27462b"
        },
        "date": 1653184577953,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.014085,
            "range": "± 0.000200",
            "unit": "us",
            "extra": "100 samples\n2110 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.058505,
            "range": "± 0.001265",
            "unit": "us",
            "extra": "100 samples\n537 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.047013,
            "range": "± 0.000933",
            "unit": "us",
            "extra": "100 samples\n642 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.157128,
            "range": "± 0.000938",
            "unit": "us",
            "extra": "100 samples\n189 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.931838,
            "range": "± 0.108275",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.404855,
            "range": "± 0.015955",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 29.74366,
            "range": "± 0.463758",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 92.44844,
            "range": "± 0.786449",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.121243,
            "range": "± 0.003116",
            "unit": "us",
            "extra": "100 samples\n247 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.271226,
            "range": "± 0.004483",
            "unit": "us",
            "extra": "100 samples\n111 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.112462,
            "range": "± 0.002659",
            "unit": "us",
            "extra": "100 samples\n271 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.244993,
            "range": "± 0.004643",
            "unit": "us",
            "extra": "100 samples\n123 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.05841,
            "range": "± 0.868898",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 193.09385,
            "range": "± 1.698636",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 67.88029,
            "range": "± 0.508353",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 181.73182,
            "range": "± 1.431577",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.205899,
            "range": "± 0.001301",
            "unit": "us",
            "extra": "100 samples\n147 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.73815,
            "range": "± 0.013698",
            "unit": "us",
            "extra": "100 samples\n41 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.15106,
            "range": "± 0.002660",
            "unit": "us",
            "extra": "100 samples\n201 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.487857,
            "range": "± 0.010592",
            "unit": "us",
            "extra": "100 samples\n62 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 111.21121,
            "range": "± 1.402163",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 549.07912,
            "range": "± 1.731462",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 85.59118,
            "range": "± 0.929623",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 448.3729,
            "range": "± 1.724733",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "8976bb7e7c12df7ff82dac616047956d97cf2a97",
          "message": "Minetest: ac5e8176b9a2b36520bcc78b9d486aea7742d554 | Irrlicht: 128cf1696c2803e12ebbdd3ee034e0c9eea90fae",
          "timestamp": "2022-05-22T15:23:30Z",
          "url": "https://github.com/minetest/benchmarks/commit/8976bb7e7c12df7ff82dac616047956d97cf2a97"
        },
        "date": 1653233458336,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.014049,
            "range": "± 0.000091",
            "unit": "us",
            "extra": "100 samples\n2111 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.055473,
            "range": "± 0.001506",
            "unit": "us",
            "extra": "100 samples\n548 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.046993,
            "range": "± 0.000742",
            "unit": "us",
            "extra": "100 samples\n647 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.158486,
            "range": "± 0.002759",
            "unit": "us",
            "extra": "100 samples\n190 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 6.93749,
            "range": "± 0.102440",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.406072,
            "range": "± 0.013783",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 29.69735,
            "range": "± 0.336047",
            "unit": "us",
            "extra": "100 samples\n2 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 92.81524,
            "range": "± 1.025063",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.121667,
            "range": "± 0.001998",
            "unit": "us",
            "extra": "100 samples\n248 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.271391,
            "range": "± 0.004199",
            "unit": "us",
            "extra": "100 samples\n111 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.113005,
            "range": "± 0.004063",
            "unit": "us",
            "extra": "100 samples\n272 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.24535,
            "range": "± 0.004020",
            "unit": "us",
            "extra": "100 samples\n124 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.01393,
            "range": "± 0.686029",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 193.38748,
            "range": "± 0.955530",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 67.71688,
            "range": "± 0.460080",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 181.60237,
            "range": "± 1.086666",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.207419,
            "range": "± 0.004379",
            "unit": "us",
            "extra": "100 samples\n149 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.737248,
            "range": "± 0.003566",
            "unit": "us",
            "extra": "100 samples\n42 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.151794,
            "range": "± 0.002244",
            "unit": "us",
            "extra": "100 samples\n202 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.489022,
            "range": "± 0.007579",
            "unit": "us",
            "extra": "100 samples\n62 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 110.40845,
            "range": "± 1.215712",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 549.80812,
            "range": "± 4.109298",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 84.89513,
            "range": "± 1.523027",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 451.47985,
            "range": "± 8.442447",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "7c99475c26e09185417e916ea8855610da3e26f7",
          "message": "Minetest: fa682270a99383f0f91c37aeed974acc140f34df | Irrlicht: 128cf1696c2803e12ebbdd3ee034e0c9eea90fae",
          "timestamp": "2022-05-22T21:19:08Z",
          "url": "https://github.com/minetest/benchmarks/commit/7c99475c26e09185417e916ea8855610da3e26f7"
        },
        "date": 1653254879065,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.011219,
            "range": "± 0.001568",
            "unit": "us",
            "extra": "100 samples\n2472 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.058217,
            "range": "± 0.008011",
            "unit": "us",
            "extra": "100 samples\n503 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.053694,
            "range": "± 0.009296",
            "unit": "us",
            "extra": "100 samples\n605 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.167218,
            "range": "± 0.028131",
            "unit": "us",
            "extra": "100 samples\n188 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.071993,
            "range": "± 1.128128",
            "unit": "us",
            "extra": "100 samples\n6 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.50405,
            "range": "± 0.083728",
            "unit": "us",
            "extra": "100 samples\n59 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 36.68094,
            "range": "± 1.742600",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 103.46283,
            "range": "± 11.341720",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.117229,
            "range": "± 0.024193",
            "unit": "us",
            "extra": "100 samples\n258 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.323237,
            "range": "± 0.043651",
            "unit": "us",
            "extra": "100 samples\n97 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.10723,
            "range": "± 0.013522",
            "unit": "us",
            "extra": "100 samples\n274 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.264472,
            "range": "± 0.069748",
            "unit": "us",
            "extra": "100 samples\n108 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 73.6879,
            "range": "± 5.236308",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 213.13477,
            "range": "± 15.215170",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 63.55892,
            "range": "± 9.243401",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 203.07771,
            "range": "± 18.831292",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.207119,
            "range": "± 0.038197",
            "unit": "us",
            "extra": "100 samples\n143 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.805589,
            "range": "± 0.028792",
            "unit": "us",
            "extra": "100 samples\n39 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.162995,
            "range": "± 0.061900",
            "unit": "us",
            "extra": "100 samples\n192 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.500796,
            "range": "± 0.056626",
            "unit": "us",
            "extra": "100 samples\n54 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 114.68785,
            "range": "± 10.751274",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 633.03212,
            "range": "± 17.712599",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 92.85085,
            "range": "± 8.097185",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 558.17222,
            "range": "± 69.955005",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "6e2c8b4caf25a9d6366136fea2b25eefa7dd26aa",
          "message": "Minetest: 16a30556dfa8e27c82d026bd63467f82d2e37a1c | Irrlicht: 128cf1696c2803e12ebbdd3ee034e0c9eea90fae",
          "timestamp": "2022-05-23T21:20:02Z",
          "url": "https://github.com/minetest/benchmarks/commit/6e2c8b4caf25a9d6366136fea2b25eefa7dd26aa"
        },
        "date": 1653341320495,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.016488,
            "range": "± 0.000365",
            "unit": "us",
            "extra": "100 samples\n2149 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.068123,
            "range": "± 0.003395",
            "unit": "us",
            "extra": "100 samples\n551 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.048397,
            "range": "± 0.003319",
            "unit": "us",
            "extra": "100 samples\n733 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.188392,
            "range": "± 0.015533",
            "unit": "us",
            "extra": "100 samples\n194 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 8.047012,
            "range": "± 0.437272",
            "unit": "us",
            "extra": "100 samples\n5 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.485973,
            "range": "± 0.012800",
            "unit": "us",
            "extra": "100 samples\n75 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 36.15994,
            "range": "± 1.111861",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 108.62983,
            "range": "± 2.958172",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.142716,
            "range": "± 0.006390",
            "unit": "us",
            "extra": "100 samples\n247 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.328107,
            "range": "± 0.008721",
            "unit": "us",
            "extra": "100 samples\n112 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.112755,
            "range": "± 0.022288",
            "unit": "us",
            "extra": "100 samples\n266 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.261362,
            "range": "± 0.021994",
            "unit": "us",
            "extra": "100 samples\n124 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 87.59729,
            "range": "± 4.106224",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 223.04879,
            "range": "± 13.097073",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 71.71981,
            "range": "± 10.647437",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 207.55415,
            "range": "± 19.199907",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.232439,
            "range": "± 0.027825",
            "unit": "us",
            "extra": "100 samples\n150 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.846411,
            "range": "± 0.089971",
            "unit": "us",
            "extra": "100 samples\n41 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.175521,
            "range": "± 0.016014",
            "unit": "us",
            "extra": "100 samples\n207 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.583061,
            "range": "± 0.031792",
            "unit": "us",
            "extra": "100 samples\n64 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 138.27362,
            "range": "± 6.748690",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 634.69072,
            "range": "± 19.650559",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 103.52274,
            "range": "± 3.717336",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 530.81296,
            "range": "± 15.657868",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "3f9fc584cc3a98c64fbc76ddc700609f56a08599",
          "message": "Minetest: ed26ed5a1f49fc66facd4a745d29441aba5a92c3 | Irrlicht: 128cf1696c2803e12ebbdd3ee034e0c9eea90fae",
          "timestamp": "2022-05-24T01:57:33Z",
          "url": "https://github.com/minetest/benchmarks/commit/3f9fc584cc3a98c64fbc76ddc700609f56a08599"
        },
        "date": 1653358041446,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.013611,
            "range": "± 0.004635",
            "unit": "us",
            "extra": "100 samples\n2640 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.066551,
            "range": "± 0.010891",
            "unit": "us",
            "extra": "100 samples\n539 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.051247,
            "range": "± 0.002171",
            "unit": "us",
            "extra": "100 samples\n673 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.182063,
            "range": "± 0.017524",
            "unit": "us",
            "extra": "100 samples\n179 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 5.310747,
            "range": "± 0.955799",
            "unit": "us",
            "extra": "100 samples\n7 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.590739,
            "range": "± 0.089628",
            "unit": "us",
            "extra": "100 samples\n50 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 47.22293,
            "range": "± 15.273604",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 113.32657,
            "range": "± 32.957343",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.125314,
            "range": "± 0.013471",
            "unit": "us",
            "extra": "100 samples\n262 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.44664,
            "range": "± 0.954823",
            "unit": "us",
            "extra": "100 samples\n102 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.127062,
            "range": "± 0.024098",
            "unit": "us",
            "extra": "100 samples\n279 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.283974,
            "range": "± 0.053925",
            "unit": "us",
            "extra": "100 samples\n107 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 78.65753,
            "range": "± 19.020472",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 261.70972,
            "range": "± 72.605492",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 67.74945,
            "range": "± 12.900650",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 208.38247,
            "range": "± 37.254810",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.228046,
            "range": "± 0.039982",
            "unit": "us",
            "extra": "100 samples\n136 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.899732,
            "range": "± 0.327781",
            "unit": "us",
            "extra": "100 samples\n40 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.160722,
            "range": "± 0.032679",
            "unit": "us",
            "extra": "100 samples\n197 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.582337,
            "range": "± 0.176499",
            "unit": "us",
            "extra": "100 samples\n57 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 126.7688,
            "range": "± 51.810867",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 669.37056,
            "range": "± 98.958456",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 88.43149,
            "range": "± 15.775107",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 530.23891,
            "range": "± 45.887942",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "committer": {
            "name": "github-actions[bot]",
            "username": "github-actions[bot]",
            "email": "41898282+github-actions[bot]@users.noreply.github.com"
          },
          "id": "448dcd06fcb19fe2abaf978a1b50393d6c103c49",
          "message": "Minetest: 8b74257bf3cbb54e78614ac6aaaba79adf75cc8e | Irrlicht: 128cf1696c2803e12ebbdd3ee034e0c9eea90fae",
          "timestamp": "2022-05-26T15:26:19Z",
          "url": "https://github.com/minetest/benchmarks/commit/448dcd06fcb19fe2abaf978a1b50393d6c103c49"
        },
        "date": 1653579341169,
        "tool": "catch2",
        "benches": [
          {
            "name": "serializeJsonStringIfNeeded_small_alpha",
            "value": 0.011146,
            "range": "± 0.001424",
            "unit": "us",
            "extra": "100 samples\n2776 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha",
            "value": 0.061598,
            "range": "± 0.019155",
            "unit": "us",
            "extra": "100 samples\n533 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.054612,
            "range": "± 0.033771",
            "unit": "us",
            "extra": "100 samples\n654 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_alpha_with_space",
            "value": 0.162129,
            "range": "± 0.059316",
            "unit": "us",
            "extra": "100 samples\n194 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha",
            "value": 4.970373,
            "range": "± 1.561148",
            "unit": "us",
            "extra": "100 samples\n8 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha",
            "value": 0.566633,
            "range": "± 0.153718",
            "unit": "us",
            "extra": "100 samples\n60 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 64.64296,
            "range": "± 120.257075",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_alpha_with_space",
            "value": 100.22797,
            "range": "± 15.469136",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped",
            "value": 0.123753,
            "range": "± 0.038374",
            "unit": "us",
            "extra": "100 samples\n271 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped",
            "value": 0.276918,
            "range": "± 0.041791",
            "unit": "us",
            "extra": "100 samples\n110 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.119111,
            "range": "± 0.017240",
            "unit": "us",
            "extra": "100 samples\n305 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_escaped_with_space",
            "value": 0.241746,
            "range": "± 0.003402",
            "unit": "us",
            "extra": "100 samples\n127 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped",
            "value": 72.28348,
            "range": "± 11.681100",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped",
            "value": 202.57787,
            "range": "± 37.647882",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 64.28396,
            "range": "± 13.758454",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_escaped_with_space",
            "value": 208.5769,
            "range": "± 129.707009",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii",
            "value": 0.207213,
            "range": "± 0.045147",
            "unit": "us",
            "extra": "100 samples\n150 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii",
            "value": 0.871139,
            "range": "± 0.463745",
            "unit": "us",
            "extra": "100 samples\n43 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.146651,
            "range": "± 0.031772",
            "unit": "us",
            "extra": "100 samples\n189 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_small_nonascii_with_space",
            "value": 0.477,
            "range": "± 0.048637",
            "unit": "us",
            "extra": "100 samples\n64 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii",
            "value": 103.97595,
            "range": "± 16.043712",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii",
            "value": 606.58056,
            "range": "± 81.857765",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "serializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 96.21793,
            "range": "± 10.292073",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          },
          {
            "name": "deSerializeJsonStringIfNeeded_large_nonascii_with_space",
            "value": 470.09466,
            "range": "± 54.889524",
            "unit": "us",
            "extra": "100 samples\n1 iterations"
          }
        ]
      }
    ]
  }
}