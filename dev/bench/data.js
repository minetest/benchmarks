window.BENCHMARK_DATA = {
  "lastUpdate": 1653157960846,
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
      }
    ]
  }
}