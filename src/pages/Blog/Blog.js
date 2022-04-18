import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div>
                <h4>Difference between authorization and authentication.</h4>
                <p>
                    Authentication ব্যবহারকারী কে তা যাচাই করে। Authorization নির্ধারণ করে কোন ব্যবহারকারী কোন রিসোর্স অ্যাক্সেস করতে পারে।

                    পাসওয়ার্ড, ওয়ান-টাইম পিন, বায়োমেট্রিক তথ্য এবং ব্যবহারকারীর দ্বারা প্রদত্ত বা প্রদত্ত অন্যান্য তথ্যের মাধ্যমে Authentication কাজ করে। Authorization সেই সেটিংসের মাধ্যমে কাজ করে যা সংস্থার দ্বারা বাস্তবায়িত এবং রক্ষণাবেক্ষণ করা হয়।

                    Authentication একটি ভাল পরিচয় এবং অ্যাক্সেস ব্যবস্থাপনা প্রক্রিয়ার প্রথম ধাপ। Authorization সর্বদা প্রমাণীকরণের পরে সঞ্চালিত হয়।

                    Authentication ব্যবহারকারীর দ্বারা দৃশ্যমান এবং আংশিকভাবে পরিবর্তনযোগ্য। Authorization ব্যবহারকারীর কাছে দৃশ্যমান বা পরিবর্তনযোগ্য নয়।
                </p>
            </div>
            <div>
                <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>
                    Firebase অনেক জনপ্রিয় কারণ এর Authentication ব্যাকএন্ড পরিষেবা, সহজে ব্যবহারযোগ্য SDK, এবং অ্যাপে ব্যবহারকারীদের Authentication জন্য তৈরি UI লাইব্রেরি প্রদান করে। এটি পাসওয়ার্ড, ফোন নম্বর, Google, Facebook এবং Twitter এর মতো জনপ্রিয় ফেডারেটেড পরিচয় প্রদানকারী এবং আরও অনেক কিছু ব্যবহার করে প্রমাণীকরণ সমর্থন করে।

                    Firebase ছাড়াও অনেক পরিবেশেবা রয়েছে। তারমধ্যে কিছু নাম নিচে দেওয়া হলো.
                    1. Parse,
                    2. Kinvey,
                    3. Back4app,
                    4. Kuzzle,
                    5. Backendless,
                    6. Pubnub,
                    7. Hoodie,
                    8. Appwrite.
                </p>
            </div>
            <div>
                <h4>What other services does firebase provide other than authentication?</h4>
                1. Cloud Firestore,
                2. Cloud Functions,
                3. Remote Config,
                4. Hosting,
                5. Cloud Storage,
                6. Google Analytics,
                7. Predictions,
                8. Cloud Messaging,
                9. Dynamic Links.
                
                <p>

                </p>
            </div>
        </div>
    );
};

export default Blog;